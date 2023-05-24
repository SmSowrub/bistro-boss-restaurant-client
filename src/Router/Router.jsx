import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home/Home";
// import Home from "../Component/Pages/Home/Banner/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;