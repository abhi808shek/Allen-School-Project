import React from 'react'
import "./Signup_css.css"

function Signup() {
  return (
    <>
        <div className="signup_container">
        <div className="signup_navbar">
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>LogOut</li>
                <li>Name</li>
            </ul>
        </div>
        <div className="signup_container1">
            <div className="signup_details">
                <h2 className="signup_heading">SignUp</h2>
                <div className="signup_container2">
                    <div className="signup_container3">
                        <p className="signup_head">First Name</p>
                        <input type="text" className="signup_input" placeholder="Vanya"/>
                    </div>
                    <div className="signup_container4">
                        <p className="signup_head">Last Name</p>
                        <input type="text" className="signup_input" placeholder="Verma"/>
                    </div>
                </div>
                <div className="signup_container5">
                    <p className="signup_head">Enter E-mail I'D</p>
                    <input type="text" className="signup_input_1" placeholder="Eg. rikive07@gmail.com"/>
                </div>
                <div className="signup_container5">
                    <p className="signup_head">Enter E-mail I'D</p>
                    <input type="text" className="signup_input_1" placeholder="Eg. rikive07@gmail.com"/>
                </div>
                <div className="signup_button">
                    <button className="signup_btn">JOIN</button>
                    <p className="signup_other">Already have an Account?<a href=""> LOG IN</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup