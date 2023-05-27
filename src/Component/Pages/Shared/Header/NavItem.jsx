import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const NavItem = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                
            })
            .catch(error => console.log(error));
    }
    const menuItem = <>
        <li className=' text-white font-[Inter]'><Link to='/'>Home</Link></li>
        <li className=' text-white font-[Inter]'><Link to='/menu'>Menu</Link></li>
        <li className=' text-white font-[Inter]'><Link to='/order/salad'>Order Food</Link></li>
        <li className=' text-white font-[Inter]'><Link to='/signup'>SignUp</Link></li>
        
        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost  text-white font-[Inter]">LogOut</button>
            </> : <>
            <li className=' text-white font-[Inter]'><Link to='/Login'>Login</Link></li>
            </>
        }
        
    </>
    return (
        <div className="navbar rounded fixed z-10 bg-black bg-opacity-30 max-w-screen-lg" >
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
                    <Link to='/' className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS</Link><br />
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