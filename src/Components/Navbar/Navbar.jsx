import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine the current active route
  const getActiveLink = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">
          LIC
        </Link>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${getActiveLink('/')}`}
          onClick={() => setIsOpen(false)} // Close the menu after clicking a link
        >
          HOME
        </Link>
        
        <Link
          to="/contact"
          className={`nav-link ${getActiveLink('/contact')}`}
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </Link>

        <Link
          to="/emi"
          className={`nav-link ${getActiveLink('/contact')}`}
          onClick={() => setIsOpen(false)}
        >
          EMI Calculator
        </Link>


      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
