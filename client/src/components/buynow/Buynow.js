import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import React from "react";
import Subtotal from "./Subtotal";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyPrice">Price</span>
          <Divider />

          <div className="item_container">
            <img src="https://picsum.photos/300/300" alt="" />
            <div className="item_details">
              <h3>Molife sence 5000 Smart Watch</h3>
              <h3>Smart Watches</h3>
              <h3 className="differentprice">&#8377;4049.00</h3>
              <p className="unusuall">usually dispached in 8 days</p>
              <p>Eligible for Free Shipping</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIHSlWrIrn-2aq_krR0NDU4RxzcXVSyOZbQ&usqp=CAU"
                alt="img"
              />
              <Option />
            </div>
            <h3 className="item_price">&#8377;4049.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Buynow;
