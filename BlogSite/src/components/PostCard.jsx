// import React from "react";
// import { Link } from "react-router-dom";

// function PostCard({ id, title, featuredImage }) {
//   return (
//     <Link
//       to={`/post/${id}`} // 🔹 use correct id
//       className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-2 no-underline text-inherit"
//     >
//       {featuredImage && (
//         <img
//           src={featuredImage} // 🔹 directly use base64
//           alt={title}
//           className="w-full h-48 object-cover rounded"
//         />
//       )}
//       <h2 className="text-lg font-bold mt-2">{title}</h2>
//     </Link>
//   );
// }

// export default PostCard;



import React from "react";
import { Link } from "react-router-dom";

function PostCard({ id, title, featuredImage }) {
  if (!id || typeof id !== "string") {
    console.error("❌ Invalid id in PostCard:", id);
    return null;
  }
  return (
    <Link
      to={`/post/${id}`} // 🔹 use id
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-2 no-underline text-inherit"
    >
      {featuredImage && (
        <img
          src={featuredImage} // 🔹 base64 works directly
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h2 className="text-lg font-bold mt-2">{title}</h2>
    </Link>
  );
}

export default PostCard;
