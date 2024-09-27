import axios from "axios";
import React, { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title === "") return;

    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default PostCreate;
