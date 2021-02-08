import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import "./css/Header.css";
import { Link } from "react-scroll";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="header" id="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            WebStock
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <BiMenu className="text-white font-weight-boldb toggle" />
          </button>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <Bounce top cascade>
              <ul className="navbar-nav ml-auto text-uppercase">
                <li className="nav-item active">
                  <Link
                    to="header"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="service"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="price"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                  >
                    Price
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="contact"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Bounce>
          </div>
        </div>
      </nav>
      <section className="header-section">
        <Fade left>
          <div className="center-div">
            <h1>We are the best Developers</h1>
            <p>We create World best Responsive Websites</p>

            <div className="header-button">
              <a href="#">AboutUs</a>

              <a href="#">Contact</a>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Header;
