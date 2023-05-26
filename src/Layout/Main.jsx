import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Pages/Shared/Footer/Footer';
import NavItem from '../Component/Pages/Shared/Header/NavItem';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    console.log(location);
    return (
        <div>
            {noHeaderFooter || <NavItem></NavItem>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;