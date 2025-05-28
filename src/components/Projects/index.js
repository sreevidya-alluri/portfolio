import React from "react";
import "./index.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import jobbyapp from "../Data/Portfolioimg/jobbyappimg.png";
import nxtwatchstream from "../Data/Portfolioimg/nxtwatchstream.png";
import movieDb from "../Data/Portfolioimg/movieDb.png";
import unirestroapp from "../Data/Portfolioimg/unirestroapp.png";
import assessquick from "../Data/Portfolioimg/assessquick.png";
import trendingnxt from "../Data/Portfolioimg/trendingnxt.png";
import ipl from "../Data/Portfolioimg/ipl.png";

const Projects = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-sm-11 offset-sm-1">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Projects</h2>
                  <br />
                </div>
                <div className="col-lg-4">
                  <a href="https://sreevidyajobby.ccbp.tech/login" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={jobbyapp} className="img-fluid" alt="Jobby App" />
                    </div>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="https://sreevidyawatch.ccbp.tech/login" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={nxtwatchstream} className="img-fluid" alt="NxtWatch Stream" />
                    </div>
                  </a>
                </div>
               <div className="col-lg-4">
                  <a href="https://ipl-app-submit.vercel.app/" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={ipl} className="img-fluid" alt="IPL App" />
                    </div>
                  </a>
                </div>
                   <div className="col-lg-4">
                  <a href="https://sreevidyanxt.ccbp.tech/" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={trendingnxt} className="img-fluid" alt="Trending Nxt" />
                    </div>
                  </a>
                </div>
            
              {/*  <div className="col-lg-4">
                  <a href="https://assessquick.ccbp.tech/login" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={assessquick} className="img-fluid" alt="Assess Quick" />
                    </div>
                  </a>
                </div> */}
             
                   <div className="col-lg-4">
                  <a href="https://moviedb.ccbp.tech/login" target="_blank" rel="noreferrer">
                    <div className="imgsec">
                      <LazyLoadImage src={movieDb} className="img-fluid" alt="Movie DB" />
                    </div>
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
