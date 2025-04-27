import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Pet Management</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/pethub">Pethub</a></li>
                <li><a href="/routine">Routine</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;

