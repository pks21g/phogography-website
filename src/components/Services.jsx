import React from "react";
import {
  mainImage,
  Secondaryimage,
  lastImage,
  tempImage,
  omainImage,
  osecondaryImage,
  olastImage,
} from "../assets/serviceimages";

function Services() {
  return (
    <div>
      <div className="heading">
        <h1 className="heading-title">Services</h1>
      </div>
      <div className="services-section">
        <div className="wedding">
          <div className="wedding-item">
            <h1 className="heading-title">Wedding</h1>
          </div>
          <div className="images">
            <img src={mainImage} alt="" className="mainImage" />
            <img src={Secondaryimage} alt="" className="secondaryImage" />
            <img src={lastImage} alt="" className="lastImage"></img>
          </div>
        </div>
        <div className="outdoor-adventure">
          <div className="adventure-item">
            <h1 className="heading-title">OutDoor</h1>
            <h1 className="heading-title">Adventure</h1>
          </div>
          <div className="images">
            <img src={omainImage} alt="" className="mainImage" />
            <img src={osecondaryImage} alt="" className="secondaryImage" />
            <img src={olastImage} alt="" className="lastImage"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
