import React from "react";
import "./style/btech.css";

const Btech = () => {
  return (
    <div className="btech-page">
      <div className="btech-title">
        <div className="btech-image">B.TECH</div>
      </div>
      <div className="coursesBox">
        <div className="courseCard-title cs">COMPUTER SCIENCE</div>
        <div className="courseCard-title aiMl">AI ML</div>
        <div className="courseCard-title civil">CIVIL</div>
        <div className="courseCard-title mechanical">MECHANICAL</div>

        <div className="courseCard-title electrical">ELECTRICAL </div>
        <div className="courseCard-title ec">
          ELECTRONICS & COMMUNICATION
        </div>
        {/* <div className="coursesBox">
          <div className="marketing"></div>
          <div className="hr"></div>
          <div className="finance"></div>
          <div className="operations"></div>
          <div className="operations"></div>
          <div className="information-technology"></div>
          <div className="international-business">INFORMATION
TECHNOLOGY</div> */}
      </div>
    </div>
  );
};

export default Btech;
