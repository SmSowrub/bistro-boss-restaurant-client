import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home/Home";
import Menu from "../Component/Pages/Meno/Menu/Menu";
import Order from "../Component/Pages/Order/Order/Order";
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
                path:'/order',
                element:<Order></Order>
            }
        ]
    }
])

export default router;