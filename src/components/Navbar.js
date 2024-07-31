import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/projects" className="nav-link">Projects</Link>
    <Link to="/experience" className="nav-link">Experience</Link>
    <Link to="/admin" className="nav-link">Admin</Link>
  </nav>
);

export default Navbar;
