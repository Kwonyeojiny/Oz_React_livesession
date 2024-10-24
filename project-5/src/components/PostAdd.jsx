import { useState } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

function PostAdd() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const axios = useAxios();

  const createPost = async () => {
    const postData = { title, body };
    try {
      const response = await axios.post("posts", postData);
      if (response.status === 200 || response.status === 201) {
        setStatus(response.status);
      }
      setTitle("");
      setBody("");
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={createPost}>submit</button>
      <div>status: {status}</div>
    </div>
  );
}

export default PostAdd;
