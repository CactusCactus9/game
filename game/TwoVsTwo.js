import React from "react";
import "./TwoVsTwo.css";
import { GiPingPongBat } from "react-icons/gi";


function TwoVsTwo() {
  return (
    <div className="TwoVsTwo-background">
      <div className="TwoVsTwo-container">
        <div className="TwoVsTwo-icon"></div>
        <p className="TwoVsTwo-name">xxxx</p>
      </div>
      <div className="TwoVsTwo-container">
        <span class="v">V</span>
        <span class="s">S</span>
        <div className="TwoVsTwo-button">
          <button className="TwoVsTwo-b"> <GiPingPongBat /> <span className="Play">PLAY</span></button>
        </div>
      </div>
      <div className="TwoVsTwo-container">
        <div className="TwoVsTwo-icon"></div>
        <p className="TwoVsTwo-name">Friends</p>
      </div>
    </div>
  );
}

export default TwoVsTwo;