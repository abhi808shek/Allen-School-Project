import React from "react";
import "./style/mba.css";

const Mba = () => {
  return (
    <div className="mba-page">
      <div className="mba-title">
        <div className="mba-image">MBA</div>
      </div>
      <div className="coursesBox">
        <div className="courseCard-title marketing">MARKETING</div>
        <div className="courseCard-title hr">HR</div>
        <div className="courseCard-title finance">FINANCE</div>
        <div className="courseCard-title Ib">INTERNATIONAL BUSINESS</div>
        <div className="courseCard-title operations">OPERATIONS</div>

        <div className="courseCard-title It">INFORMATION TECHNOLOGY </div>
      </div>
    </div>
  );
};

export default Mba;
