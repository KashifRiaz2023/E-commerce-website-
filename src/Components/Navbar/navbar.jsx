import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <nav className="navbar">
     <div className="desktopMenu">
     <Link className="desktopMenuListItem">Home</Link>
     <Link className="desktopMenuListItem">Jewelry</Link>
     <Link className="desktopMenuListItem">Handbags</Link>
     <Link className="desktopMenuListItem">Accessories</Link>
     <Link className="desktopMenuListItem">Sale</Link>
     <Link className="desktopMenuListItem">About us</Link>
     <Link className="desktopMenuListItem">Contact us</Link>
     <Link className="desktopMenuListItem">Blog</Link>
     </div>
  </nav>
  );
};

export default navbar
