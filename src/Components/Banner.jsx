import React from "react";
import "./css/Banner.css";
import { BiDesktop } from "react-icons/bi";
import { FaMagic, FaTrophy } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
const Banner = () => {
  return (
    <div className="banner">
      <Zoom left cascade>
        <div className="container">
          <div className="row ">
            <div className="extra col-lg-4 col-md-4 col-12">
              <BiDesktop className=" icons" />
              <h4>EASY TO USE</h4>
              <p>
                Geometric sans serif typefaces have been a popular design tool
                ever since these actors took to the world’s stage.
              </p>
            </div>
            <div className="extra col-lg-4 col-md-4 col-12 ">
              <FaTrophy className="icons" />
              <h4>AWESOME DESIGN</h4>
              <p>
                Geometric sans serif typefaces have been a popular design tool
                ever since these actors took to the world’s stage.
              </p>
            </div>
            <div className="extra col-lg-4 col-md-4 col-12">
              <FaMagic className="icons" />
              <h4>EASY TO CUSTOMIZE</h4>
              <p>
                Geometric sans serif typefaces have been a popular design tool
                ever since these actors took to the world’s stage.
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Banner;
