import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <h2 className="logo">PetPal Limited</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Events</Link></li>
          <li><Link to="/patients">Routine</Link></li>
          <li><Link to="/doctors">Pethub</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

