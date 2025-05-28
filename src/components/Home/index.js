import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Linkedinicon from '../../assets/img/socialicons/linkedin.png';
import Githubicon from '../../assets/img/socialicons/github.png';
import Mailicon from '../../assets/img/socialicons/email.png';

import About from "../../assets/img/about.png";
import Contact from "../../assets/img/contact.png";
import Education from "../../assets/img/education.png";
import Services from "../../assets/img/services.png";
import Jsprojects from "../../assets/img/jsprojects.png";

import { useState } from 'react';



const Home = () => {
      const [visible, setVisible] = useState(false);
  const showResume = () =>{
      window.open("https://drive.google.com/file/d/1G0It1QrwVndyV2I85YJg8zQq1y6P9jLH/view?usp=sharing", "_blank");
  }

  return (

    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              
            <div className="socialmedia responsive-below-hireme">
                
                <a
                  href="https://github.com/sreevidya-alluri"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
               
                <a
                  href="mailto:sreevidya.alluri@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Mailicon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                href="https://www.linkedin.com/in/sree-vidya-alluri/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right">
              <img src="https://st4.depositphotos.com/8440746/41399/v/450/depositphotos_413993450-stock-illustration-employee-icon-vector-working-online.jpg" className='imggirl' alt="welcome"/>
              </div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Sree Vidya</h1> 
               <i
    className={visible ? "fa fa-close" : "fa fa-bars"}
    onClick={() => setVisible(!visible)}
  ></i> 

 
              <h2>Fullstack & Devops Engineer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                    <button type="button" className="btn btn-primary" onClick={showResume}>
                      Resume
                    </button>
            
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
                {/* Social media icons for mobile */}
                <div className="col-12 d-block d-sm-none mt-3">
                  <div className="socialmedia mobile-socialmedia">
                    <a
                      href="https://github.com/sreevidya-alluri"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Githubicon}
                        alt="github"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                      />
                    </a>
                    <a
                      href="mailto:sreevidya.alluri@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Mailicon}
                        alt="email"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sree-vidya-alluri/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linkedinicon}
                        alt="linkedin"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
