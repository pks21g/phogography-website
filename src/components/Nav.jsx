import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Nav() {
  return (
    <div className="navigation">
      <img src={logo} alt="" />
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
