import React, { useState } from "react";
import Home from "../../assets/img/home.png";
import About from "../../assets/img/about.png";
import Contact from "../../assets/img/contact.png";
import Education from "../../assets/img/education.png";
import Services from "../../assets/img/services.png";
import Jsprojects from "../../assets/img/jsprojects.png";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="navigation">
        <ul>
          <Link to="/">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" />
            </li>
          </Link>
          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
            </li>
          </Link>
          <Link to="/projects">
            <li data-aos="zoom-in">
              <img src={Jsprojects} alt="jsprojects" />
            </li>
          </Link>
          <Link to="/education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link>
          <Link to="/services">
            <li data-aos="zoom-in">
              <img src={Services} alt="services" />
            </li>
          </Link>
          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <h1 data-aos="fade-in">
          <Link to="/">Sree Vidya</Link>
        </h1>
        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>
        <ul
          className={`list-unstyled ${visible ? "visible" : ""}`}
          data-aos="slide-down"
          data-aos-duration="700"
        >
          <Link to="/">
            <li onClick={() => setVisible(false)}>Home</li>
          </Link>
          <Link to="/about">
            <li onClick={() => setVisible(false)}>About</li>
          </Link>
          <Link to="/services">
            <li onClick={() => setVisible(false)}>What I Do</li>
          </Link>
          <Link to="/work">
            <li onClick={() => setVisible(false)}>Work</li>
          </Link>
          <Link to="/education">
            <li onClick={() => setVisible(false)}>Education</li>
          </Link>
          <Link to="/projects">
            <li onClick={() => setVisible(false)}>Projects</li>
          </Link>
          <Link to="/portfolio">
            <li onClick={() => setVisible(false)}>Portfolio</li>
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1TRlIYXPLPazrJb2lHQp5hmymqS4wj-Lx?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li onClick={() => setVisible(false)}>Learn</li>
          </a>
          <Link to="/contact">
            <li onClick={() => setVisible(false)}>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
