import React from "react";
import "./home.css";
import Logo from "../assets/mi-tio-logo.png";

const Home = () => {
  return (
    <div className="home">
      <img src={Logo} alt="" className="logo" />
    </div>
  );
};

export default Home;
