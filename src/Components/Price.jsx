import React from "react";
import "./css/Price.css";
import Flip from "react-reveal/Flip";
const Price = () => {
  return (
    <div className="price">
      <div className="container text0-center my-5">
        <h4 className="text-center font-weight-bold text-white ">
          OUR BEST PRICING
        </h4>
      </div>
      <div className="container">
        <Flip cascade>
          <div className="row">
            <div className="col-lg-4 col-md-12 my-2">
              <div className="card cards text-center">
                <div className="card-header">BASIC </div>
                <ul className="card-body">
                  <li>
                    $ <span className="money">20</span>/website
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <div className="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card cards text-center card-price">
                <div className="card-header">STANDARD </div>
                <ul className="card-body">
                  <li>
                    $ <span className="money">40</span>/website
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <div className="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 ">
              <div className="card cards text-center">
                <div className="card-header">UNLIMITED </div>
                <ul className="card-body">
                  <li>
                    $ <span className="money">60</span>/website
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <div className="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default Price;
