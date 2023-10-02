import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://m.media-amazon.com/images/I/712Brp0hwfL._UX695_.jpg"
            alt="cart"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon Favourite electric Shoe</h4>
          <Divider />
          <p className="mrp">M.R.P. : &#8377;1195</p>
          <p>
            Deal of the Day:{" "}
            <span style={{ color: "#B12704" }}>&#8377;625</span>
          </p>
          <p>
            You save :{" "}
            <span style={{ color: "#B12704" }}>&#8377;570 (47%)</span>
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% Off</span>
            </h5>
            <h4>
              Free Delivery
              <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span>
            </h4>
            <p>
              Fastest Delivery{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            {" "}
            Lorem ipsum dolor sit
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
              }}
            >
              amet consectetur adipisicing elit. Tempora, fuga pariatur!
              Cupiditate aliquam, ipsa quia dolores amet sequi eaque architecto.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
