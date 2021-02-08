import React, { useState } from "react";
import "./css/NewsLetter.css";
import Pulse from "react-reveal/Pulse";
const NewsLetter = () => {
  const [sub, setSub] = useState("");
  const handelsub = (e) => {
    e.preventDefault();
    setSub("");
  };
  return (
    <div className="news">
      <Pulse>
        <div className="container my-5">
          <h4 className="text-center">SUBSCRIBE TO NEWSLETTER</h4>
        </div>
        <div className="container">
          <div className="row">
            <form className="col-lg-12 col-md-12" onSubmit={handelsub}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  onChange={(e) => {
                    setSub(e.target.value);
                  }}
                  className="form-control email"
                  placeholder="Your Email"
                  value={sub}
                />
                <div className="input-group-append btn-primary btns">
                  <button className="btn btn-primary btns" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Pulse>
    </div>
  );
};

export default NewsLetter;
