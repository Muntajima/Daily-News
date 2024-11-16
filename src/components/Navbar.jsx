import React from 'react';
import userLogo from '../assets/user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4'>
            <div></div>
            <div className='space-x-6'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={userLogo} alt="" />
                <Link to='/auth' className='btn btn-neutral rounded-none px-8 py-1'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;