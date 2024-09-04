import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine the current active route
  const getActiveLink = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo">
          LIC
        </Link>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${getActiveLink('/')}`}
          onClick={() => setIsOpen(false)}
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
          className={`nav-link ${getActiveLink('/emi')}`}
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
