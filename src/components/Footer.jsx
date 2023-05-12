import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Mi Tio. All rights reserved.</p>
      <p>2942 Grand Point Hwy, Breaux Bridge, LA, United States, Louisiana </p>
      <p>Phone: (337) 454-6064 </p> <p>Email: mitiomexicangrill@gmail.com</p>
      <div className="facebook-container">
        <Link
          to="https://www.facebook.com/profile.php?id=100091312973571"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-link"
        >
          <BsFacebook />
        </Link>
      </div>
      <div className="instagram-container">
        <Link
          to="https://instagram.com/mitiomexicangrill?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <BsInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
