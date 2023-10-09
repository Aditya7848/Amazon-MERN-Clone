import React, { useState } from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  async function loginHandler(e) {
    e.preventDefault();

    const { email, password } = logData;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      toast.error("Invalid details.", {
        position: "top-center",
      });
    } else if (res.status === 200) {
      toast.success("Login successfull.", {
        position: "top-center",
      });
      console.log(data);
      setLogData({ ...logData, email: "", password: "" });
    }
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonLogo" />
          </div>
          <div className="sign_form">
            <form action="POST">
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
              <button className="signin_btn" onClick={loginHandler}>
                Continue
              </button>
            </form>
            <ToastContainer />
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
