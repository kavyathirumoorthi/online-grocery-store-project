import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css"; // Ensure you have this CSS file

function SignUp() {
  const [formData, setFormData] = useState({ username: "", phone: "", password: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/signup", formData);

      alert(response.data.message);
      setFormData({ username: "", phone: "", password: "" }); // Reset form after success
    } catch (error) {
      alert("Error signing up: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="overlay">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx"
            alt="Grocery Logo"
            className="about-logo"
          />
          <h1>WELCOME</h1>
          <p><b>Ideal Grocery Store</b></p>
          <p1>Happy Shopping</p1>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label>Phone number</label>
            <input
              type="text"
              name="phone"
              className="input-field"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
