import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Card from "../Pages/Home/Card";
import Viewdetails from "../Pages/Home/Viewdetails";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Error from "../../../assignment-9/src/Components/Error";




const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:"/viewdetails/:id",
                element:<Viewdetails></Viewdetails>,
                loader:({params})=>fetch(`http://localhost:5000/viewdetails/${params.id}`)
                
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<Login></Login>
            }
           
            
            
        ]
    }
])
export default router;