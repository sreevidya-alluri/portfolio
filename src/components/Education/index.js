import React from "react";
import "./index.css";
import services from "../Data/Education.json";

const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Certifications
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <br />
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.coursename} - {item.courseyear}
                        </h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                      </div>
                    </div>
                    <hr className="hr-element" />
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="educationblock">
                  <div className="row">
                  <div className="col-sm-4">
                      <h5 data-aos="fade-right">Dec 09, 2023</h5>
                    </div>
                    <div className="col-sm-8 certi-block">
                      <div className="educationright" data-aos="fade-left">
                        <h5>TCS NQT</h5>
                      </div>
                    </div>
                    <hr className="hr-element" />
                    <div className="col-sm-4">
                      <h5 data-aos="fade-right">Aug 10, 2023 - Sep 10, 2023</h5>
                    </div>
                    <div className="col-sm-8 certi-block">
                      <div className="educationright" data-aos="fade-left">
                        <h5>Bharat Intern</h5>
                      </div>
                    </div>
                  
                  <hr className="hr-element" />
                  <div className="col-sm-4 internships">
                      <h5 data-aos="fade-right">Aug 1, 2023 - Aug 30, 2023</h5>
                    </div>
                    <div className="col-sm-8 certi-block">
                      <div className="educationright" data-aos="fade-left">
                        <h5 className="internships">Code Alpha</h5>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
