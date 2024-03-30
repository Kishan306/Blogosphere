import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import {Blog} from "./Pages/Blog"
import { Publish } from "./Pages/Publish"
import { Blogs } from "./Pages/Blogs"


const Routes =createBrowserRouter([
  {
    path:'',
    element:<Signup/>
  },{
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/blog/:id',
    element:<Blog/>
  },
  {
    path:'/blogs',
    element:<Blogs/>
  },
  {
    path:'/publish',
    element:<Publish/>
  }
])
function App() {
  
  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
