import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="nav-wrapper">
        <div className="container">
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tutorial'>Tutorial</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/signin'>Login</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;