import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [uData, setUData] = useState({
    fname: "",
    email: "",
    password: "",
    mobile: "",
    cpassword: "",
  });
  console.log(uData);
  const handleData = (e) => {
    const { name, value } = e.target;
    setUData(() => {
      return {
        ...uData,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonLogo" />
          </div>
          <div className="sign_form">
            <form action="">
              <h1>Crate Account</h1>
              <div className="form_data">
                <label htmlFor="fname">Your name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={uData.fname}
                  onChange={handleData}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={uData.email}
                  onChange={handleData}
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  onChange={handleData}
                  value={uData.mobile}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleData}
                  value={uData.password}
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Password again</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  onChange={handleData}
                  value={uData.cpassword}
                />
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account</p>
                <NavLink to="/login">Sign-in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
