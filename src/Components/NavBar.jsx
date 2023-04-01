import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
      <div className="navigation">
      <div className="nav-bar">
        <Link to="/" className="app-logo">
          Sukoon
        </Link>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/about" className="nav-links">
          About
        </Link>
        <Link to="/services" className="nav-links">
          Services
        </Link>
        <Link to="/contact" className="nav-links">
          Contact
        </Link>
      </div>
      <div className="auth">
        <Link to="www.google.com" className="auth-button">
          Login
        </Link>
        <Link to="www.google.com" className="auth-button">
          Sign Up
        </Link>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
