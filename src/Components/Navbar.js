import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <a href="/" className="logo-text">XENWEALTH</a>

        <button 
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/team">Our Team</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;