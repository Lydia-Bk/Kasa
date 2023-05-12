import React from 'react';
import { NavLink } from 'react-router-dom';
import "./../Navbar/Navbar.css"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar_logo">
                <img src="logo.png" alt="logo_kasa" />
            </div>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    );
};

export default Navbar;