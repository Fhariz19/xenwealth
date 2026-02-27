import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        
        {/* TEXT LOGO HOME BUTTON */}
        <a href="/" className="logo-text">
          XENWEALTH
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/team">Our Team</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

