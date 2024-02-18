import React from "react";
import bgvideo from "../assets/background-sony.mp4";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-video">
      <div className="overlay"></div>
      <video id="videospeed" src={bgvideo} autoPlay loop muted playsInline />
      <div className="logoname">
        <h1>Prestige Photography</h1>
        <hr />
        <p>Photography for all needs</p>
        <Link to='/photography-website/contact' className="book">Book a Consultation</Link>
      </div>
      
    </div>
  );
}

export default Banner;
