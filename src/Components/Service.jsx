import React from "react";
import "./css/Service.css";
import { BiDesktop, BiWifi } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Slide from "react-reveal/Slide";
const Service = () => {
  return (
    <div className="service">
      <Slide top cascade>
        <div className="container text-center service-text">
          <h1 className="text-center font-weight-bold">WHAT DO WE OFFER</h1>
          <p className="text-center">
            Geometric sans serif typefaces have been a popular design tool ever
            since these actors took to the world’s stage.
          </p>
        </div>
      </Slide>
      <div className="container-fluid ">
        <div className="row contain">
          <Slide left cascade>
            <div className="col-lg-6 col-md-12 service-space">
              <div className="names my-4">
                <h6 className="text-left">HTML</h6>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
              </div>
              <div className="names my-4 ">
                <h6 className="text-left">CSS</h6>
                <div class="progress w-65">
                  <div
                    class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="names my-4">
                <h6 className="text-left">JAVASCRIPT</h6>
                <div class="progress w-65">
                  <div
                    class="progress-bar bg-info progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="names my-4 ">
                <h6 className="text-left">REACT JS</h6>
                <div class="progress w-65">
                  <div
                    class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="names my-4">
                <h6 className="text-left">NODE JS</h6>
                <div class="progress w-65">
                  <div
                    class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide right cascade>
            <div className="col-lg-6 col-md-12 ">
              <div className="row service-div">
                <div className="col-lg-2 col-md-2 ml-0">
                  <BiDesktop className=" icons" />
                </div>
                <div className="col-lg-10 col-md-10 text-left extras ">
                  <h4>Website Developement</h4>
                  <p>
                    Geometric sans serif typefaces have been a popular design
                    tool ever since these actors took to the world’s stage.
                  </p>
                </div>
              </div>
              <div className="row service-div">
                <div className="col-lg-2 col-md-2 ">
                  <BiWifi className=" icons" />
                </div>
                <div className="col-lg-10 col-md-10 text-left extras">
                  <h4>Digital Marketing</h4>
                  <p>
                    Geometric sans serif typefaces have been a popular design
                    tool ever since these actors took to the world’s stage.
                  </p>
                </div>
              </div>
              <div className="row service-div">
                <div className="col-lg-2 col-md-2 ">
                  <FaPhoneAlt className=" icons" />
                </div>
                <div className="col-lg-10 col-md-10 text-left extras">
                  <h4>Support 24/7</h4>
                  <p>
                    Geometric sans serif typefaces have been a popular design
                    tool ever since these actors took to the world’s stage.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Service;
