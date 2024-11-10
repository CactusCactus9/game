import React from "react";
import "./OneVsOne.css";
import { GiPingPongBat } from "react-icons/gi";

function OneVsOne() {
  return (
    <div className="onevsone-background">
      <div className="onevsone-container">
        <div className="onevsone-icon"></div>
        <p className="onevsone-name">xxxx</p>
      </div>
      <div className="onevsone-container">
      <span class="v">V</span>
      <span class="s">S</span>
    <div className="onevsone-button">
      <button className="onevsone-b"><GiPingPongBat />
      PLAY</button>
    </div>

      </div>
      <div className="onevsone-container">
        <div className="onevsone-icon"></div>
        <p className="onevsone-name">Friends</p>
      </div>
    </div>
  );
}

export default OneVsOne;