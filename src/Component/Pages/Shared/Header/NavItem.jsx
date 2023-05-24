import React from 'react';

const NavItem = () => {
    const menuItem = <>
        <li className=' text-white font-[Inter]'><a>Item 1</a></li>
        <li tabIndex={0}>
            <a className="justify-between text-white font-[Inter]">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2 text-white font-[Inter]">
                <li><a>Home</a></li>
                <li><a>About</a></li>
            </ul>
        </li>
        <li className=' text-white font-[Inter]'><a>Item 3</a></li>
    </>
    return (
        <div className="navbar rounded" style={{background: 'rgba(21, 21, 21, 0.5)'}} >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className='leading-3'>
                    <a className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS</a><br />
                    <small className='font-[Cinzel] text-[#FFFFFF]'>R E S T A U R A N T</small>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavItem;