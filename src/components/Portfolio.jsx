import React from "react";
import {
  WeddingPictures,
  longImages,
  wPics,
} from "../assets/data/WeddingPictures";

function Portfolio() {
  return (
    <>
      {" "}
      <div className="portfolio">
        {WeddingPictures.map((picture) => (
          <div key={picture.id} className="wedding-image">
            <img src={picture.image} alt="" />
            <div className="description">{picture.description}</div>
          </div>
        ))}
      </div>
      <div className="longsection">
        <div className="longimages">
          {longImages.map((picture) => (
            <div key={picture.id}>
              <img src={picture.image} alt="" />
              <div className="description">{picture.description}</div>
            </div>
          ))}
        </div>
        <div className="wPics">
          {wPics.map((picture) => (
            <div key={picture.id} >
              <img src={picture.image} alt=""></img>
              <div className="description">{picture.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
