import React from "react";
import {
  outdoor1,
  outdoor2,
  outdoor3,
  outdoor4,
  outdoor5,
  outdoor6,
} from "../assets/data/OutdoorPics";

const Outdoor = () => {
  const description = "Outdoor | Adventure";
  return (
    <div className="outdoor">
      <div className="outdoortop">
        <div className="left">
          <img src={outdoor2} alt="" className="outdoor2" />
          <p className="description">{description}</p>
          <img src={outdoor4} alt="" className="outdoor4" />
          <p className="description">{description}</p>
        </div>
        <div className="right">
          <img src={outdoor1} alt="" className="outdoor1" />
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="outdoorbottom">
        <div className="right">
          <img src={outdoor5} alt="" className="outdoor5" />
          <p className="description">{description}</p>
        </div>
        <div className="left">
          <img src={outdoor3} alt="" className="outdoor3" />
          <p className="description">{description}</p>
          <img src={outdoor6} alt="" className="outdoor6" />
          <p className="description">{description}</p>
        </div>
      </div>

      <img src="" alt="" />
    </div>
  );
};

export default Outdoor;
