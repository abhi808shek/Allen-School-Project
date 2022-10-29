import React, { useState } from "react";
import axios from "axios";
import "./style/login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLoginData = async () => {
    const loginData = {
      email,
      password,
    };
    console.log(loginData);
    // const result = await axios.post("/", loginData);
    // console.log(result);
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">Login</h1>

        <div className="login-contentBox">
          <div className="content-textBox">
            <label htmlFor="email" className="login-label">
              Email I’d
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="login-inputBox"
              placeholder="Eg. rkive07@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="content-textBox">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="login-inputBox"
              placeholder="Eg. Asdq34#$%"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="bottom-btn" style={{marginLeft:"260px",marginTop:"5px"}} onClick={submitLoginData}>Login</button>
          <p className="forgetPassword">Forgotten your Password?</p>
        </div>
        <div className="login-bottomBox">
          <h5 className="bottom-text">New Here?</h5>
          <NavLink to="/signup">
          
            <button className="bottom-btn" >Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
