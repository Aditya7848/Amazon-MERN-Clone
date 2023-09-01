import React from "react";
import "./footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to Know</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect With us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make MOney With Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell Under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./amazon_PNG25.png" alt="logo" />
        <p>
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996- {year} ,
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
