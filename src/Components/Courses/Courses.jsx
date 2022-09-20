import React from "react";
import "./style/courses.css";
import "./style/courses.css";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <div className="course_container">
      <div className="course_container1">
        <div className="course_card_container1">
          <NavLink to="/courses/mba">
            <div className="course_card card1">
              <h2 className="course_head">MBA</h2>
            </div>
          </NavLink>
          <NavLink to="/courses/bba">
            <div className="course_card card2">
              <h2 className="course_head">BBA</h2>
            </div>
          </NavLink>
        </div>
        <div className="course_card_container2">
          <NavLink to="/courses/bca">
            <div className="course_card card3">
              <h2 className="course_head">BCA</h2>
            </div>
          </NavLink>
        </div>
        <div className="course_card_container1">
          <NavLink to="/courses/diploma">
            <div className="course_card card4">
              <h2 className="course_head">DIPLOMA</h2>
            </div>
          </NavLink>
          <NavLink to="/courses/btech">
            <div className="course_card card5">
              <h2 className="course_head">B.TECH</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Courses;
