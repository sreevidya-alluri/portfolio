import React from "react";
import "./index.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2><br/>
              <p>
             I'm a Full Stack and DevOps Engineer with experience building scalable web applications using Golang, Node.js, and React.js. I’ve contributed to projects involving cloud migrations, CI/CD pipelines, and modern API development. Skilled in tools like Docker, Jenkins, AWS, and GCP, I bring a DevOps mindset to software engineering. I’m Google Cloud Certified and enjoy working in agile, fast-paced environments. Passionate about solving real-world problems with clean, efficient code.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
