import React from "react";
import "./css/Footer.css";
import Jump from "react-reveal/Jump";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Swing from "react-reveal/Swing";
const Footer = () => {
  return (
    <div className="footer pt-5 pb-3">
      <div className="container wid">
        <div className="row d-flex align-content-center justify-content-center mb-5">
          <div className="col-lg-5 text-left about">
            <Jump>
              <h4>About Webstock</h4>
            </Jump>
            <Slide left>
              <p>
                Lipsum generator: Lorem Ipsum - All the factshttps://lipsum.com
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </Slide>
          </div>

          <div className="col-lg-3  navlinks ">
            <Jump>
              <h4>NAVIGATION LINKS</h4>
            </Jump>
            <Flip cascade>
              <ul className="links">
                <li>Home</li>
                <li>Service</li>
                <li>Price</li>
                <li>About</li>
              </ul>
            </Flip>
          </div>
          <div className="col-lg-4  text-left newsletter">
            <Jump>
              <h4>NEWSLETTER</h4>
            </Jump>
            <Slide right>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </Slide>
            <Zoom bottom>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Your Email"
                />
                <div className="input-group-append btn-primary btns">
                  <button className="btn btn-primary btns" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <Swing>
          <p>
            Copyright ©2021 All Rights Reserved | This Website is made by Suraj
            Mohanty
          </p>
        </Swing>
      </div>
    </div>
  );
};

export default Footer;
