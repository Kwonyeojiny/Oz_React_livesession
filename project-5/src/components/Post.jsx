import { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

function Post() {
  const [posts, setPosts] = useState([]);
  const axios = useAxios();

  const fetchPost = async () => {
    try {
      const response = await axios.get("posts");
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
}

export default Post;
