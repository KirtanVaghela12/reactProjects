// import React,{ useState, useEffect} from 'react'
// import {Container ,PostForm} from '../components'
// import postService from '../services/postServices'
// import { useParams, useNavigate } from 'react-router-dom'

// function EditPost() {
//     const [post,setPosts] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if(slug){
//             postService.getPost(slug).then((post)=>{
//                 if(post){
//                     setPosts(post)
//                 }
//             })
//         }else{
//             navigate('/')
//         }
//     }, [slug,navigate])
//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost


import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import postService from "../services/postServices";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

/* ✅ THIS LINE MUST EXIST */
export default EditPost;

