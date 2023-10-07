import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams("");
  const [inddata, setinddata] = useState([]);

  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status !== 200) {
      alert("no data available");
    } else {
      setinddata(data);
    }
  };
  useEffect(() => {
    getinddata();
  }, [id]);

  return (
    <div className="cart_section">
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.url} alt="cart" />
            <div className="cart_btn">
              <button className="cart_btn1">Add to Cart</button>
              <button className="cart_btn2">Buy now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inddata.title.shortTitle}</h3>
            <h4>{inddata.title.longTitle}</h4>
            <Divider />
            <p className="mrp">M.R.P. : &#8377;{inddata.price.mrp}</p>
            <p>
              Deal of the Day:{" "}
              <span style={{ color: "#B12704" }}>
                &#8377;{inddata.price.cost}
              </span>
            </p>
            <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                &#8377;570 ({inddata.price.discount})
              </span>
            </p>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inddata.discount}</span>
              </h5>
              <h4>
                Free Delivery
                <span style={{ color: "#111", fontWeight: 600 }}>
                  Oct 8 - 21
                </span>
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
              <span
                style={{
                  color: "#565959",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                {inddata.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
