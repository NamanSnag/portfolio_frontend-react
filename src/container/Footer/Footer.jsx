import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";

import { images } from "../../constants";
import { client } from "../../client";

import "./Footer.scss";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, 
      [name] : value
     });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: email,
      email: email,
      message: message,
    };
    try {
      await client.create(contact);
      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {}
  };

  return (
    <>
      <h2 className="head-text">Connect with <span>me</span>, I here to help.</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:nnag44141@gmail.com" className="p-text">
            nnag44141@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+917083215690" className="p-text">
            +91 7083215690
          </a>
        </div>
      </div>

      {isSubmitted ? (
        <div>
          <h3 className="head-text">Thanks for getting in touch! 😊</h3>
        </div>
      ) : (
        <div className="app__footer-form app_flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>

          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Enter Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
