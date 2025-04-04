import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Comment.css";
import CommentsForm from "./CommentForm";

export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "@rana",
            remark: "good",
            rating: 5,
            id: uuidv4(),
        },
    ]);

    let addNewComment = (comment) => {
        setComments((curr) => [...curr, comment]);
        // console.log("comment added");
    };
    return (
        <>
            <diV>
                <h3>All comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={comment.id}>
                        <p>
                            user : <b>{comment.username}</b>
                        </p>
                        <span>remark : {comment.remark}</span>
                        <p>
                            <b>rating : {comment.rating} ⭐</b>
                        </p>
                    </div>
                ))}
            </diV>
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
