import React from "react";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import "../style.css"; // CSS file style.css ka path sahi rakho

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#products" className="footer-link">Products</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <Facebook className="icon" />
          <Twitter className="icon" />
          <Instagram className="icon" />
        </div>

        {/* Subscribe */}
        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-btn">
            <Mail className="btn-icon" /> Subscribe
          </button>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          &copy; 2025 MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
