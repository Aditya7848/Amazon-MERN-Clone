import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [uData, setUData] = useState({
    fname: "",
    email: "",
    password: "",
    mobile: "",
    cpassword: "",
  });
  console.log(uData);

  const notify = () => toast("Registration successful.");
  const handleData = (e) => {
    const { name, value } = e.target;
    setUData(() => {
      return {
        ...uData,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, password, mobile, cpassword } = uData;
    console.log(uData);

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fname, email, password, mobile, cpassword }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      toast.error("Invalid details.", {
        position: "top-center",
      });
    } else {
      toast.success("Registration successfull.", {
        position: "top-center",
      });

      setUData({
        ...uData,
        fname: "",
        email: "",
        password: "",
        mobile: "",
        cpassword: "",
      });
    }
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonLogo" />
          </div>
          <div className="sign_form">
            <form action="POST">
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
              <button className="signin_btn" onClick={senddata}>
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account</p>
                <NavLink to="/login">Sign-in</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />;
        </div>
      </section>
    </>
  );
};

export default SignUp;
