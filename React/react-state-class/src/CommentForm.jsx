import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((curr) => {
            return { ...curr, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            remark: "",
            rating: 5,
        });
    };
    return (
        <div>
            <br></br>
            <br></br>
            <h3>comment here</h3>
            <form onSubmit={handleSubmit}>
                <br></br>
                <label htmlFor="Username">UserName</label>
                <input
                    placeholder="username"
                    id="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                ></input>
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="remark">Remark</label>
                <textarea
                    id="remark"
                    placeholder="add remark"
                    value={formData.remark}
                    onChange={handleInputChange}
                    name="remark"
                />
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    id="rating"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                    name="rating"
                ></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}
