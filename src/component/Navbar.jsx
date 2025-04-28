import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🐾 PetPal</div>
      <ul className="navbar-links">
        <li><Link to="/">Profiles</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/routines">Routines</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/petshub">Pets Hub</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

