import React from "react";
import {
  mainImage,
  Secondaryimage,
  lastImage,
  tempImage,
  omainImage,
  osecondaryImage,
  olastImage,
  eventp1,
  eventp2,
  eventp3
} from "../assets/serviceimages";

function Services() {
  return (
    <div>
      <div className="message">
        <h4>Professional photography services provided worldwide</h4>
        <p>Whether you are looking for a wedding, outdoor, event, or anything else, have you covered </p>
        <p>Checkout our services below to know more</p>
      </div>
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
            <h1 className="heading-title adv">OutDoor</h1>
            <h1 className="heading-title adv">Adventure</h1>
          </div>
          <div className="images">
            <img src={omainImage} alt="" className="mainImage" />
            <img src={osecondaryImage} alt="" className="secondaryImage" />
            <img src={olastImage} alt="" className="lastImage"></img>
          </div>
        </div>
        <div className="event">
          <div className="event-item">
            <h1 className="heading-title">Events</h1>
          </div>
          <div className="images">
            <img src={eventp1} alt="" className="mainImage" />
            <img src={eventp2} alt="" className="secondaryImage event" />
            <img src={eventp3} alt="" className="lastImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
