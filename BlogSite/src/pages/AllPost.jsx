import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import postService from "../services/postServices";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  postService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
      console.log("posts: ", posts);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {false && posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
