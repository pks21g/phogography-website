import React from "react";
import bgvideo from "../assets/background-sony.mp4";

function Banner() {
  // const pspeed = document.getElementById("videospeed");
  // pspeed.playbackRate = 2;
  return (
    <div className="banner-video">
      <div className="overlay"></div>
      <video id="videospeed" src={bgvideo} autoPlay loop muted playsInline />
      <div className="logoname">
        <h1>Prestige Photography</h1>
        <hr />
        <p>Photography for all needs</p>
      </div>
    </div>
  );
}

export default Banner;
