import React from "react";
import "./css/Project.css";
import CountUp from "react-countup";
import Zoom from "react-reveal/Zoom";
const Projects = () => {
  return (
    <div className="project">
      <div className="container text-center my-5">
        <p className="text-center font-weight-bold">
          MORE THAN 2000 WEBSITES CREATED
        </p>
      </div>
      <Zoom right cascade>
        <div className="container d-flex align-item-center justify-content-around">
          <div>
            <CountUp end={1500} className="count" />
            <p>CMS Installation</p>
          </div>
          <div>
            <CountUp end={2500} className="count" />
            <p>Awards Won</p>
          </div>
          <div>
            <CountUp end={700} className="count" />
            <p>Happy Clients</p>
          </div>
          <div>
            <CountUp end={500} className="count" />
            <p>Working On</p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Projects;
