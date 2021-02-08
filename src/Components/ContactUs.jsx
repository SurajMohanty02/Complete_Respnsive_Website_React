import React, { useState } from "react";
import "./css/ContactUs.css";
import Zoom from "react-reveal/Zoom";
const ContactUs = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();

    setInput({
      name: "",
      email: "",
      phone: "",
      msg: "",
    });
  };
  const handelChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact">
      <div className="container text-center ">
        <h4 className="text-center font-weight-bold ">CONTACT US</h4>
        <p className="text-center">
          We are here help you and answer to your questions.
        </p>
      </div>
      <Zoom cascade>
        <form className="container" onSubmit={handelSubmit}>
          <div className="form-group">
            <input
              onChange={handelChange}
              value={input.name}
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="form-control"
              autoComplete="of"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={handelChange}
              value={input.email}
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="form-control"
              autoComplete="of"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={handelChange}
              value={input.phone}
              name="phone"
              type="text"
              placeholder="Enter your Mobile No"
              className="form-control"
              autoComplete="of"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handelChange}
              value={input.msg}
              name="msg"
              type="text"
              placeholder="Enter your Message"
              className="form-control"
              autoComplete="of"
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </Zoom>
    </div>
  );
};

export default ContactUs;
