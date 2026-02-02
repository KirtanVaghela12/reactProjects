// import authService from "./authServices";

// class PostService {
//   createPost({ title, content, featuredImage }) {
//   const user = authService.getCurrentUser();
//   if (!user) throw new Error("User not logged in");

//   const posts = JSON.parse(localStorage.getItem("post")) || [];
//   const newPost = {
//     id: crypto.randomUUID(), // use `id` here
//     title,
//     content,
//     featuredImage,
//     userId: user.id,
//     status: "active",
//     createdAt: new Date().toISOString(),
//   };

//   posts.push(newPost);
//   localStorage.setItem("post", JSON.stringify(posts));

//   return Promise.resolve(newPost); // return promise
// }

// getPost(id) {
//   const posts = JSON.parse(localStorage.getItem("posts")) || [];
//   return Promise.resolve(posts.find((post) => post.id === id)); // return post by id
// }

//   async updatePost(postId, updatedData) {
//     const user = authService.getCurrentUser();
//     if (!user) throw new Error("User not logged in");

//     const posts = JSON.parse(localStorage.getItem("post")) || [];

//     const index = posts.findIndex(
//       (post) => post.id === postId && post.userId === user.id,
//     );

//     if (index === -1) throw new Error("Post not found or unauthorized");

//     posts[index] = { ...posts[index], ...updatedData };
//     localStorage.setItem("post", JSON.stringify(posts));

//     return posts[index];
//   }

//   async deletePost(postId) {
//     const user = authService.getCurrentUser();
//     if (!user) throw new Error("User not logged in");

//     let posts = JSON.parse(localStorage.getItem("post")) || [];

//     const post = posts.find((p) => p.id === postId && p.userId === user.id);

//     if (!post) throw new Error("Post not found or unauthorized");

//     posts = posts.filter((p) => p.id !== postId);
//     localStorage.setItem("post", JSON.stringify(posts));

//     return true;
//   }

//   async getPost(postId) {
//     const posts = JSON.parse(localStorage.getItem("post")) || [];
//     return posts.find((post) => post.id === postId);
//   }

//   async getPosts() {
//     const posts = JSON.parse(localStorage.getItem("post")) || [];
//     return await posts
//     .filter((post) => post.status === "active")
//     .map((post) => ({
//       ...post,
//       id: post.id, // make sure id exists
//       title: post.title,
//       featuredImage: post.featuredImage,
//     }));
//     // return posts.filter((post) => post.status === "active");
//   }

//   async getUserPosts() {
//     const user = authService.getCurrentUser();
//     if (!user) return [];
//     const posts = JSON.parse(localStorage.getItem("post")) || [];
//     return posts.filter((post) => post.userId === user.id);
//   }
// }

// const postService = new PostService();
// export default postService;




import authService from "./authServices";

class PostService {
  async createPost({ title, content, featuredImage }) {
    const user = authService.getCurrentUser();
    if (!user) throw new Error("User not logged in");

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: crypto.randomUUID(), // must be id, not $id
      title,
      content,
      featuredImage: featuredImage || null, // store base64 or URL
      userId: user.id,
      status: "active",
      createdAt: new Date().toISOString(),
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    return Promise.resolve(newPost);
  }

  async getPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    return posts.filter((post) => post.status === "active");
  }

  async getPost(id) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    return posts.find((post) => post.id === id) || null;
  }

  async updatePost(postId, updatedData) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const index = posts.findIndex((p) => p.id === postId);
    if (index === -1) throw new Error("Post not found");
    posts[index] = { ...posts[index], ...updatedData };
    localStorage.setItem("posts", JSON.stringify(posts));
    return posts[index];
  }

  async deletePost(postId) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts = posts.filter((p) => p.id !== postId);
    localStorage.setItem("posts", JSON.stringify(posts));
    return true;
  }
}

const postService = new PostService();
export default postService;
