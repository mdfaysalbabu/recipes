import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Card from "../Pages/Home/Card";
import Viewdetails from "../Pages/Home/Viewdetails";
import Login from "../Components/Register/Login";
import Register from "../Components/Register/Register";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
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
                path:'card',
                element:<Card></Card>,
                loader:()=>fetch('http://localhost:5000/chef')
               
            },
            {
                path:"/view/:id",
                element:<Viewdetails></Viewdetails>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
            
        ]
    }
])
export default router;