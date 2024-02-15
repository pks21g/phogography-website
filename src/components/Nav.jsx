import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navigation">
      <ul className="navigation-menu">
        <Link to="/photography-website">Home</Link>
        <Link to="/photography-website/services">Service</Link>
        <Link to="/photography-website/portfolio">Portfolio</Link>
        <Link to="/photography-website/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Nav;
