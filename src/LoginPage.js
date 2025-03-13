import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // Store error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await axios.post("http://localhost:5005/login", formData);
      
      console.log("Login Response:", response.data); // ✅ Debugging response
  
      alert(response.data.message);
  
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");  
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message); // ✅ Log the error
      setError(error.response?.data?.message || "Login failed");
    }
  };
  


  return (
    <div className="container">
      <div className="left-section">
        <div className="overlay">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx" alt="Grocery Logo" className="about-logo" />
          <h1>WELCOME</h1>
          <p>Ideal Grocery Store</p>
          <p1>Happy Shopping</p1>
        </div>
      </div>

      <div className="right-section">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />

            <button type="submit">LOGIN</button>
          </form>

          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}

          <div className="signup-box">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
