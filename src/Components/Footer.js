import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* LEFT */}
        <div className="footer-social">
          <h5>XENWEALTH SOCIAL MEDIA</h5>

          <div className="social-list">
            <a href="https://www.facebook.com/xenwealthmy" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/xenwealthmy/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@xenwealth" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>

            <a href="https://www.linkedin.com/company/xenwealth-group/posts/?feedView=all" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Team">Our Team</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h5>Contact</h5>

          <div className="contact-item">
            <FaEnvelope />
            <span>xenwealthmy@gmail.com</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <small>© {new Date().getFullYear()} XenWealth — All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}