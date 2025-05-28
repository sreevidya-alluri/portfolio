import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import educationData from "../Data/Education.json";


const certifications = [
 
  {
    date: "April 12, 2025",
    title:"Google Cloud Certified - Associate Cloud Engineer",
    expiry: "April 12, 2028",
     link : "https://www.credly.com/badges/a3438c19-b8b0-436f-beab-3682e4d00ec5/public_url"
  },
];

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="educationn" className="container py-4">
      <ul className="nav nav-tabs mb-4" data-aos="fade-down">
         <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "certifications" ? "active" : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </li>
        
      </ul>

      {activeTab === "education" && (
        <div className="tab-pane active" id="education">
          {educationData.map((item) => (
            <div className="educationblock mb-4" key={item.id}>
              <div className="row">
                <div className="col-sm-5">
                  <h5 data-aos="fade-right">
                    {item.coursename} - {item.courseyear}
                  </h5>
                </div>
                <div className="col-sm-7">
                  <div className="educationright" data-aos="fade-left">
                    <h5>{item.institute}</h5>
                    <h6>{item.grade}</h6>
                  </div>
                </div>
              </div>
              <hr className="hr-element" />
            </div>
          ))}
        </div>
      )}

      {activeTab === "certifications" && (
        <div className="tab-pane active" id="certifications">
          {certifications.map((cert, index) => (
            <div className="educationblock mb-4" key={index}>
              <div className="row">
                <div className="col-sm-4">
                  <h5 data-aos="fade-right">{cert.date}</h5>
                </div>
                <div className="col-sm-8">
                  <div className="educationright" data-aos="fade-left">
                    <h5>{cert.title}</h5>
                    <h6>Expiry: {cert.expiry}</h6>  
                  <a
  className="certification-link"
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate
</a>

                  </div>
                </div>
              </div>
              <hr className="hr-element" />
            </div>
          ))}
        </div>
      )}

                 {/* Work Experience Tab */}
            {activeTab === "experience" && (
  <div className="tab-pane active">
    <div className="educationblock">
      <div className="row">
        <div className="col-sm-4">
          <h5 data-aos="fade-right">Fournine Cloud</h5>
        </div>
        <div className="col-sm-8">
          <div className="educationright" data-aos="fade-left">
            <h5>October 1st 2024 - Present</h5>
            <ul>
              <li>Built a cloud-native full-stack app for machine monitoring using Go, React, and DynamoDB.</li>
              <li>Integrated real-time FFT analysis, AWS IoT Core.</li>
              <li>Automated deployments using Jenkins and Ansible.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hr-element" />
    </div>
  </div>
)}

    </div>
  );
};

export default Education;
