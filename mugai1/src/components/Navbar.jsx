import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="mugai-nav">
    <Link to="/" className="mugai-title">Mugai</Link>
    <div className="mugai-nav-links">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
