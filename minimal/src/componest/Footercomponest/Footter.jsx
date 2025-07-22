import React from "react";
import "./footter.css"; 
import Sociallink from "../Footercomponest/footer_img/Social Links.svg"
import Send from "../Footercomponest/footer_img/send.svg"


const Footter = () => {
  return (
    <footer className="footer">
      <div className="footer-uper">
      <div className="cta-section">
        <h2>
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="demo-btn">Get a Demo →</button>
      </div>
      </div>

<div className="footer-lower">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <img src="/Icon.svg" alt="Nexcent" /> 
            <h3>Nexcent</h3>
          </div>
          <p>
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>
          <div className="social-icons">
            <img src={Sociallink} alt="" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="subscribe">
            <h4>Stay up to date</h4>
            <div className="email-subscribe">
              <input type="email" placeholder="Your email address" />
              <button>
                <img src={Send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footter;
