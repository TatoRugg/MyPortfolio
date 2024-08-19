import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`nav-links ${menuOpen ? 'nav-links-mobile' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin</Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;