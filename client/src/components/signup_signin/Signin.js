import React, { useState } from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  function handleData(e) {
    const { name, value } = e.target;
    setLogData(() => {
      return {
        ...logData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonLogo" />
          </div>
          <div className="sign_form">
            <form action="">
              <h1>Sign-in</h1>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={logData.email}
                  onChange={handleData}
                />
              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={logData.password}
                  onChange={handleData}
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon</p>
            <NavLink to="/register">
              <button>Create your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
