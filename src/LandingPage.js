import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UserCircle } from "lucide-react";

import "./LandingPage.css";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (query === "fruits") {
      navigate("/fruits"); 
    } else if (query === "vegetables") {
      navigate("/vegetables"); 
    } else if (query === "beverages") {
      navigate("/beverages"); 
    } else if (query === "chocolates" || query === "chocolate") {
      navigate("/chocolate");  
    } else {
      alert("Product not found!");
    }
  };

  // Toggle profile dropdown
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo-name-container">
          <a href="/" className="logo-link">
            <img 
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx" 
              alt="Store Logo" 
              className="store-logo"
            />
          </a>
          <h1 className="store-name">Ideal Grocery Store</h1>
        </div>
        
        {/* Search Box */}
        <div className="search-box">
          <input 
            type="text" 
            placeholder="🔍 Search for products..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        
        <nav>
          <Link to="/about" className="nav-link">About Us</Link> 
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} color="black" />
          </Link> 
          
          {/* Profile Icon with Dropdown */}
          <div className="profile-container" ref={dropdownRef}>
            <div className="profile-icon" onClick={toggleDropdown}>
              <UserCircle size={24} stroke="black" />
            </div>
            
            {showDropdown && (
              <div className="dropdown-menu">
                <p><Link to="/profile">My Account</Link></p>
                <p><Link to="/basket">My Basket</Link></p>
                <p><Link to="/orders">My Orders</Link></p>
                <p><Link to="/wallet">My Wallet</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
                <p><Link to="/logout">Log Out</Link></p>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="hero-section">
        <h2 className="hero-text">
          Make a healthy life with <span className="green-text">FRESH</span> grocery
        </h2>
        <Link to="/Fruits" className="shop-button">Shop Now</Link> 
      </div>
    </div>
  );
};

export default LandingPage;
