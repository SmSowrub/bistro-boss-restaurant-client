import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Pages/Shared/Footer/Footer';
import NavItem from '../Component/Pages/Shared/Header/NavItem';

const Main = () => {
    return (
        <div>
            <NavItem></NavItem>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;