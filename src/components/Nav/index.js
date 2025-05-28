import React, { useState } from "react";
import Home from "../../assets/img/home.png";
import About from "../../assets/img/about.png";
import Contact from "../../assets/img/contact.png";
import Education from "../../assets/img/education.png";
import Services from "../../assets/img/services.png";
import Jsprojects from "../../assets/img/jsprojects.png";
import { Link } from "react-router-dom";
import "./index.css";

const navItems = [
  { to: "/", icon: Home, alt: "home", label: "Home" },
  { to: "/about", icon: About, alt: "about", label: "About" },
  { to: "/projects", icon: Jsprojects, alt: "projects", label: "Projects" },
  { to: "/education", icon: Education, alt: "education", label: "Education" },
  { to: "/services", icon: Services, alt: "services", label: "Services" },
  { to: "/contact", icon: Contact, alt: "contact", label: "Contact" },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <div id="navigation">
        <ul>
          {navItems.map((item, index) => (
            <Link key={index} to={item.to}>
              <li data-aos="zoom-in">
                <img src={item.icon} alt={item.alt} />
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div id="navigation-mob">
        <h1>
          <Link to="/">SV</Link>
        </h1>
        
        <button 
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        <ul className={isMobileMenuOpen ? 'visible' : ''}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={closeMobileMenu}>
                <img src={item.icon} alt={item.alt} />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
          onClick={closeMobileMenu}
        ></div>
      </div>
    </div>
  );
};

export default Nav;