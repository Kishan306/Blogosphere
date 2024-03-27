import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Blog from "./Pages/Blog"


const Routes =createBrowserRouter([
  {
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
