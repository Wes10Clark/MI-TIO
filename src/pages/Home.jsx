import React from "react";
import "./home.css";
import Logo from "../assets/mi-tio-logo.png";
import Front from "../assets/rsz_mi-tio-front.jpg";
import Sign from "../assets/rsz_mi-tio-sign.jpg";
import Bar from "../assets/rsz_mi-tio-bar.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={Logo} alt="" className="logo" />
      <div className="welcome-message">
        <h1>Welcome to Mi Tio - where flavor comes to life!</h1>
        <p className="description">
          We invite you to embark on a culinary journey that celebrates the
          vibrant and authentic flavors of Mexico. Our passion for Mexican
          cuisine runs deep, and we take pride in crafting dishes that showcase
          the richness and diversity of our heritage.
        </p>
        <div className="picture-container">
          <img classname="front" src={Front} alt="resturant front" />
        </div>
        <p className="description">
          At Mi Tio, we believe that every bite should be an experience, a
          moment that tantalizes your taste buds and transports you to the heart
          of Mexico. From our traditional family recipes passed down through
          generations to our creative twists on beloved classics, each dish is
          thoughtfully prepared using the freshest ingredients and bold spices
          that capture the essence of Mexican gastronomy.
        </p>
        <p className="description">
          Step into our vibrant and welcoming space, where the aromas of
          sizzling fajitas, the melodies of mariachi music, and the laughter of
          happy diners fill the air. Whether you're joining us for a casual
          lunch, a romantic dinner, or a festive celebration, our friendly staff
          is here to ensure your experience is nothing short of exceptional.
        </p>
        <img src={Sign} alt="mi tio sign" />
        <p className="description">
          Explore our menu that showcases the iconic dishes of Mexico, from
          sizzling carne asada and mouthwatering tacos to indulgent enchiladas
          and refreshing margaritas. Each bite tells a story, taking you on a
          journey through the diverse culinary regions of Mexico.
        </p>
        <p className="description">
          At Mi Tio, we strive to create more than just a meal. We aim to create
          memories and moments of joy shared with loved ones. We are honored to
          be a part of your special occasions, family gatherings, and cherished
          milestones.
        </p>
        <img src={Bar} alt="mi tio bar" />
        <p className="description">
          Thank you for choosing Mi Tio. Join us as we celebrate the vibrant
          flavors, warm hospitality, and rich traditions of Mexico. Get ready to
          indulge in an unforgettable dining experience that will leave you
          craving more.
        </p>
        <h2 className="sub-heading">¡Bienvenidos a Mi Tio!</h2>
        <a
          href="https://www.google.com/maps/place/MI+Tio/@30.3164908,-91.8321252,15z/data=!4m6!3m5!1s0x8624879d5d58250d:0x53f1934d2c7167af!8m2!3d30.3164908!4d-91.8321252!16s%2Fg%2F11t_z8j15d"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Directions
        </a>
      </div>
    </div>
  );
};

export default Home;
