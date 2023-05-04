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
import Privetroutes from "../Providers/Privetroutes";
import Errorpage from "../Pages/Shared/Errorpage";




const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:"/viewdetails/:id",
                element:<Privetroutes><Viewdetails></Viewdetails></Privetroutes>,
                loader:({params})=>fetch(`https://chef-server-project-mdfaysalbabu.vercel.app/viewdetails/${params.id}`)
                
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