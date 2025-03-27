import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="about-container">
   
      <div className="about-left">
        <div className="about-overlay">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx" alt="Grocery Logo" className="about-logo" />
          <h1 className="about-title">WELCOME</h1>
          <h2 className="about-subtitle">Ideal Grocery Store</h2>
          <p className="about-highlight">Happy Shopping</p>
        </div>
      </div>

     
      <div className="about-right">
        <div className="about-links">
          <a href="#login" className="about-link">login</a>
       </div>
        <div className="about-text">
          <h2>Welcome to Ideal Grocery Store</h2>
          <p2>
            We’re committed to transforming the way you shop for groceries. Our mission is simple:
            to bring the freshest products, the best brands, and everyday essentials right to your
            doorstep with convenience and ease.
          </p2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
