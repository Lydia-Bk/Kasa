import React from 'react';
import { NavLink } from 'react-router-dom';
import "./../Navbar/Navbar.css"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar_logo">
                <NavLink to="/"><img src="/LOGO.png" alt="logo_kasa"/></NavLink>
            </div>
            <div className="navbar_links">
                <NavLink className="navbar_link" to="/">Accueil</NavLink>
                <NavLink className="navbar_link" to="/about">À propos</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;