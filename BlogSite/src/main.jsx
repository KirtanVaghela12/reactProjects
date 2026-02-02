// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { AuthLayout, Login } from './components/index.js'
// import Home from './pages/Home.jsx'
// // import Login from './pages/Login.jsx'

// import AddPost from './pages/AddPost.jsx'
// import Signup from './pages/Signup.jsx'
// import EditPost from './pages/EditPost.jsx'
// import AllPosts from './pages/AllPost.jsx'
// import Post from './pages/Post.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path:'/',
//         element: <Home />
//       },
//       {
//         path:'/login',
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         )
//       },{
//         path:'/signup',
//         element: (
//           <AuthLayout authentication={false}>
//             <Signup />
//           </AuthLayout>
//         )
//       },
//       {
//         path:'/all-posts',
//         element: (
//           <AuthLayout authentication>
//             {""}
//             <AllPosts />
//           </AuthLayout>
//         )
//       },
//       {
//         path:'/add-post',
//         element: (
//           <AuthLayout authentication>
//             {""}
//             <AddPost />
//           </AuthLayout>
//         )
//       },
//       {
//         path:'/edit-post/:slug',
//         element: (
//           <AuthLayout authentication>
//             {""}
//             <EditPost />
//           </AuthLayout>
//         )
//       },
//       {
//         path: '/post/:slug',
//         element: <Post />
//       }
//     ],
//   },
// ])


// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//       </Provider>
//     </BrowserRouter>
// )


import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store.js'
import { AuthLayout, Signup } from './components/index.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import AllPosts from './pages/AllPost.jsx'
import Post from './pages/Post.jsx'

// --- ROUTER SETUP ---
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      { path:'/', element: <Home /> },
      { path:'/login', element: <AuthLayout authentication={false}><Login /></AuthLayout> },
      { path:'/signup', element: <AuthLayout authentication={false}><Signup /></AuthLayout> },
      { path:'/all-posts', element: <AuthLayout authentication><AllPosts /></AuthLayout> },
      { path:'/add-posts', element: <AuthLayout authentication><AddPost /></AuthLayout> },
      { path:'/edit-post/:slug', element: <AuthLayout authentication><EditPost /></AuthLayout> },
      { path:'/post/:id', element: <Post /> }
    ],
  },
])

// --- RENDER APP ---
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
