import Connection from "../models/connection.model.js";
import User from "../models/user.model.js";

export const sendConnection = async (req, res) => {
    try {
        let { id } = req.params;
        let sender = req.userId;

        let user = await User.findById(sender);

        if (sender == id) {
            return res
                .status(400)
                .json({ message: "you can't send req to yourself" });
        }

        if (user.connection.includes(id)) {
            return res
                .status(400)
                .json({ message: "you are already connected" });
        }

        let reqPending = await Connection.findOne({
            sender,
            receiver: id,
            status: "pending",
        });

        if (reqPending) {
            return res.status(400).json({ message: "request already pending" });
        }

        let newRequest = await Connection.create({
            sender,
            receiver: id,
        });
        return res.status(200).json(newRequest);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `send connection error ${error}` });
    }
};

export const acceptConnection = async (req, res) => {
    try {
        let { connectionId } = req.params;
        let connection = await Connection.findById(connectionId);

        if (!connection) {
            return res
                .status(400)
                .json({ message: "connection does not exist" });
        }

        // Only the receiver can accept the request
        if (connection.receiver.toString() !== req.userId.toString()) {
            return res
                .status(403)
                .json({ message: "not authorized to accept this request" });
        }

        if (connection.status !== "pending") {
            return res
                .status(400)
                .json({ message: "request already processed" });
        }

        // Update connection status
        connection.status = "accepted";
        await connection.save();

        // Add both users in each other's connection array
        await User.findByIdAndUpdate(req.userId, {
            $addToSet: { connection: connection.sender },
        });

        await User.findByIdAndUpdate(connection.sender, {
            $addToSet: { connection: req.userId },
        });

        return res.status(200).json({ message: "connection accepted" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `connection accept error ${error}` });
    }
};

export const rejectConnection = async (req, res) => {
    try {
        let { connectionId } = req.params;
        let connection = await Connection.findById(connectionId);

        if (!connection) {
            return res
                .status(400)
                .json({ message: "connection does not exist" });
        }

        if (connection.status != "pending") {
            return res.status(400).json({ message: "request under process" });
        }

        connection.status = "rejected";
        await connection.save();

        return res.status(200).json({ message: "connection rejected" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `connection rejected error ${error}` });
    }
};

export const getConnectionStatus = async (req, res) => {
    try {
        const targetUserId = req.params.userId;
        const currentUserId = req.userId;

        let currentUser = await User.findById(currentUserId);
        if (currentUser.connection.includes(targetUserId)) {
            return res.json({ status: "disconnect" });
        }

        const pendingRequest = await Connection.findOne({
            $or: [
                { sender: currentUserId, receiver: targetUserId },
                { sender: targetUserId, receiver: currentUserId },
            ],
            status: "pending",
        });

        if (pendingRequest) {
            if (pendingRequest.sender.toString() === currentUserId.toString()) {
                return res.json({ status: "pending" });
            } else {
                return res.json({
                    status: "received",
                    requestId: pendingRequest._id,
                });
            }
        }
        // if no connection or pending req found
        return res.json({ status: "connect" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `get status connection error ${error}` });
    }
};

export const removeConnection = async (req, res) => {
    try {
        let { id } = req.params; // the user we're removing

        // remove from both users' connection arrays
        await User.findByIdAndUpdate(req.userId, {
            $pull: { connection: id },
        });
        await User.findByIdAndUpdate(id, {
            $pull: { connection: req.userId },
        });

        // also remove the Connection document
        await Connection.findOneAndDelete({
            $or: [
                { sender: req.userId, receiver: id },
                { sender: id, receiver: req.userId },
            ],
        });

        return res.json({ message: "Connection removed successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getConnectionRequests = async (req, res) => {
    try {
        const userId = req.userId;

        const requests = await Connection.find({
            receiver: userId,
            status: "pending",
        }).populate(
            "sender",
            "firstName lastName email userName profileImage headline"
        );

        return res.status(200).json(requests);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `get connection request error ${error}` });
    }
};

export const getUserConnections = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findById(userId).populate(
            "connection",
            "firstName lastName userName profileImage headline connection"
        );

        return res.json(user.connection);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: `get user connection error ${error}` });
    }
};
