// src/NavBar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Make sure to create this CSS file

const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    const handleToggle = () => {
        setNavActive(!navActive);
    };

    return (
        <header>
            <nav className="navbar">
                
                    <div class="logo">
                        <span class="first-name">MUHAMMAD</span>
                        <span class="last-name">ABBAS</span>
                    </div>

        
                <ul className={navActive ? "nav-links active" : "nav-links"}>
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/About" activeClassName="active-link">About</NavLink></li>
                    <li><NavLink to="/Portfolio" activeClassName="active-link">Portfolio</NavLink></li>
                    <li><NavLink to="/Resume" activeClassName="active-link">Resume</NavLink></li>
                    <li><NavLink to="/Projects" activeClassName="active-link">Projects</NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active-link">Contact</NavLink></li>
                </ul>
                <div className={navActive ? "burger toggle" : "burger"} onClick={handleToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
