import React, { useState } from "react";
import axios from "axios";
import "./Signup_css.css";
import { NavLink } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = async () => {
    const data = {
      name,
      email,
      password,
    };
    console.log(data);
    // const result = await axios.post("/", data);
    // console.log(result);
  };
  return (
    <>
      <div className="signup_container">
        <div className="signup_container1">
          <div className="signup_details">
            <h2 className="signup_heading">SignUp</h2>
            <div className="signup_container2">
              <div className="signup_container3">
                <p className="signup_head">Name</p>
                <input
                  type="text"
                  className="signup_input"
                  placeholder="Vanya"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="signup_container4">
                <p className="signup_head">Password</p>
                <input
                  type="password"
                  className="signup_input"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="signup_container5">
              <p className="signup_head">Enter E-mail I'D</p>
              <input
                type="text"
                className="signup_input_1"
                placeholder="Eg. rikive07@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="signup_button">
              <button className="signup_btn" onClick={submitData}>JOIN</button>
              <p className="signup_other">
                Already have an Account?<NavLink to="/login"> LOG IN</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
