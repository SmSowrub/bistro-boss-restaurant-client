import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home/Home";
import Menu from "../Component/Pages/Meno/Menu/Menu";
import Order from "../Component/Pages/Order/Order/Order";
import SignUp from "../Component/Pages/Autintication/SiginUp/SignUp";
import Login from "../Component/Pages/Autintication/Login/Login";
import Secrate from "../Component/Pages/Secrate/Secrate";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Component/Pages/DashBoard/MyCart/MyCart";
import AllUser from "../Component/Pages/DashBoard/AllUser/AllUser";
import AddItem from "../Component/Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Component/Pages/DashBoard/ManageItem/ManageItem";
// import Home from "../Component/Pages/Home/Banner/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secrate></Secrate></PrivateRoute>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUser></AllUser>
            },

            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            }

        ]
    }

])

export default router;