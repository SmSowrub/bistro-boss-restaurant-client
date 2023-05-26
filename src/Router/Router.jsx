import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home/Home";
import Menu from "../Component/Pages/Meno/Menu/Menu";
import Order from "../Component/Pages/Order/Order/Order";
import SignUp from "../Component/Pages/Autintication/SiginUp/SignUp";
import Login from "../Component/Pages/Autintication/Login/Login";
// import Home from "../Component/Pages/Home/Banner/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }
])

export default router;