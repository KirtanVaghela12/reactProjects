// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, Select, RTE } from "../index";
// import postService from "../../services/postServices";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PostForm = ({ post }) => {
//   const { register, handleSubmit, watch, setValue, control, getValues } =
//     useForm({
//       defaultValues: {
//         title: post?.title || "",
//         slug: post?.id || "", // 🔹 changed from postId to id
//         content: post?.content || "",
//         status: post?.status || "active",
//       },
//     });

//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth.userData);

//   const submit = async (data) => {
//     let imageBase64 = null;

//     // 🔹 Convert uploaded file to base64
//     if (data.image && data.image[0]) {
//       const file = data.image[0];
//       const reader = new FileReader();
//       await new Promise((resolve) => {
//         reader.onloadend = () => {
//           imageBase64 = reader.result; // 🔹 base64 string
//           resolve();
//         };
//         reader.readAsDataURL(file);
//       });
//     }

//     const dbPost = postService.createPost({
//       ...data,
//       userId: userData.id,
//       featuredImage: imageBase64, // 🔹 store base64
//     });

//     if (dbPost) navigate(`/post/${dbPost.id}`);
//   };

//   const slugTransform = useCallback((value) => {
//     if (value && typeof value === "string")
//       return value
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-zA-Z\d]+/g, "-");
//     return "";
//   }, []);

//   React.useEffect(() => {
//     const subscription = watch((value, { name }) => {
//       if (name === "title") {
//         setValue("slug", slugTransform(value.title), { shouldValidate: true });
//       }
//     });
//     return () => subscription.unsubscribe();
//   }, [watch, slugTransform, setValue]);

//   return (
//     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//       <div className="w-2/3 px-2">
//         <Input
//           label="Title :"
//           placeholder="Title"
//           className="mb-4"
//           {...register("title", { required: true })}
//         />
//         <Input
//           label="Slug :"
//           placeholder="Slug"
//           className="mb-4"
//           {...register("slug", { required: true })}
//           onInput={(e) => {
//             setValue("slug", slugTransform(e.currentTarget.value), {
//               shouldValidate: true,
//             });
//           }}
//         />
//         <RTE
//           label="Content :"
//           name="content"
//           control={control}
//           defaultValue={getValues("content")}
//         />
//       </div>
//       <div className="w-1/3 px-2">
//         <Input
//           label="Featured Image :"
//           type="file"
//           className="mb-4"
//           accept="image/png, image/jpg, image/jpeg, image/gif"
//           {...register("image", { required: !post })}
//         />
//         {post?.featuredImage && (
//           <div className="w-full mb-4">
//             <img
//               src={post.featuredImage} // 🔹 base64 preview
//               alt={post.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}
//         <Select
//           options={["active", "inactive"]}
//           label="Status"
//           className="mb-4"
//           {...register("status", { required: true })}
//         />
//         <Button
//           type="submit"
//           bgColor={post ? "bg-green-500" : undefined}
//           className="w-full"
//         >
//           {post ? "Update" : "Submit"}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;




import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE } from "../index.js";
import postService from "../../services/postServices.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

 const submit = async (data) => {
  if (post) {
    // ✏️ UPDATE POST
    const updatedPost = await postService.updatePost(post.id, {
      ...data,
      featuredImage: post.featuredImage,
    });

    if (updatedPost) {
      navigate(`/post/${post.id}`);
    }
  } else {
    // ➕ CREATE POST
    const reader = new FileReader();
    reader.readAsDataURL(data.image[0]);

    reader.onload = async () => {
      const dbPost = await postService.createPost({
        ...data,
        featuredImage: reader.result,
        userId: userData.id,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.id}`);
      }
    }
  }
    // convert image to base64
    if (data.image && data.image[0]) {
      const file = data.image[0];
      featuredImage = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    }

    const newPost = await postService.createPost({
      title: data.title,
      content: data.content,
      featuredImage,
    });

    if (newPost) navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col w-full max-w-lg mx-auto">
      <Input label="Title" {...register("title", { required: true })} />
      <RTE label="Content" name="content" control={control} />
      <Input type="file" label="Image" {...register("image")} />
      <Button type="submit" className="mt-4 w-full">Create Post</Button>
    </form>
  );
};

export default PostForm;
