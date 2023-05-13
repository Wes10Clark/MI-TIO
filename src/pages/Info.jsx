import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <h2 className="section-title">Info</h2>
      <div className="card">
        <h2 className="info-title">Happy Hour</h2>
        <h5 className="info-details">Happy Hour is from 2:00pm - 6:00pm</h5>
        <h5 className="info-details">Happy Hour Margarita - 12oz $2.99</h5>
        <h5 className="info-details">
          Happy Hour Beer - Small $1.99 - Large $3.99
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Apply</h2>
        <h5 className="info-details">
          Please come in and request an application we would love to have you
          join our team
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Catering</h2>
        <h5 className="info-details">
          Please call the resturant at (337) 454-6064 to set up a catering order
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">To-Go</h2>
        <h5 className="info-details">
          Please call us at (337) 454-6064 to place a to-go order
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Contact Us</h2>
        <h5 className="info-details">
          Contact us by calling (337) 454-6064, emailing us at
          mitiomexicangrill@gmail.com contact us on facebook and instagram with
          the links at the bottom
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Leave us a review</h2>
        <h5 className="info-details">
          Thank you so much for your visit if you enjoyed it please feel free to
          let us know. Also if there is something we can improve on feel free to
          let us know. All feedback is welcome click
          <a
            href="https://g.page/r/Ca9ncSxNk_FTEB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="review-link"
          >
            here
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Info;
