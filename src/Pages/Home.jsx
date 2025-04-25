

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // You can use the global styles here

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to PetPal!</h1>
        <p>Your ultimate pet care journal. Keep track of your pets’ routines, health, and special events.</p>
      </header>
      
      <div className="home-navigation">
        <h2>Start your journey with your pets!</h2>
        <div className="home-links">
          <Link to="/pethub" className="home-link">Visit PetHub</Link>
          <Link to="/routine" className="home-link">Track Pet Routine</Link>
          <Link to="/events" className="home-link">View Events</Link>
          <Link to="/about" className="home-link">About PetPal</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
