import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Blog from './Components/Blog/Blog.jsx';
import User from './Components/Users/User.jsx';
import User2 from './Components/User2/User2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';


const useProms = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())



const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children: [
      {index:true, Component:Home},
      {path:'about', Component: About},
      {path:'blog', Component:Blog},
      {path:'user' , 
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User
      },
      {
        path:'user2',
        element:<Suspense fallback={<span>laonging......</span>}>
          <User2 useProms ={useProms}></User2>
        </Suspense>
      },
      {
        path:"posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts,
      },

      // =======dynamic router======
      {
        path:"user/:userId",
        // loader:({params}) => {
        //   console.log("params insite the loader", params.userId);
        //   fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        // },

        loader:({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        Component:UserDetails,
      },
      {
        path:'post/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails,
      }
    

    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
