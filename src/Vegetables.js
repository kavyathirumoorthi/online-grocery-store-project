import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Vegetables.css";

const Vegetables = () => {
  const [searchQuery, setSearchQuery] = useState("");
      const navigate = useNavigate();
    
      const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();
    
        if (query === "fruits") {
          navigate("/fruits"); 
        } else if (query === "vegetables") {
          navigate("/vegetables"); // Navigate to Vegetables page
        } 
        else if (query === "beverages") {
          navigate("/beverages"); // Navigate to Vegetables page
        }
        else if (query === "chocolates") {
          navigate("/chocolates"); // Navigate to Beverages page
        } else {
          alert("Product not found!");
        }
      };
    
  const products = [
    { name: "Carrot", image: "https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202408070949.jpg?im=Resize=(420,420)", price: 17.5, weightOptions: ["500 g", "1 Kg"] },
    { name: "Lady's Finger", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhkSrbxiqjGbg-IRH3AkIUGkLSUhutth5Iw&s", price: 41, weightOptions: ["1 Kg"] },
    { name: "Fenugreek Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BDFFpBQwd1xvreJmZ3JbwBTVnR8QyABmng&s", price: 32.33, weightOptions: ["1 Kg"] },
    { name: "Capsicum", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZxU1oUgaqLmz_IdfWLkCHyfVBtAqVs6rxw&s", price: 11.3, weightOptions: ["1 Kg"] },
    { name: "Radish", image: "https://seed2plant.in/cdn/shop/products/whiteradish.jpg?v=1611836380", price: 20.5, weightOptions: ["1 Kg"] },
    { name: "Drumstick", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFTFL92LNE138GchJLPeoAlQGhrEcbUbuLg&s", price: 12.5, weightOptions: ["100 g", "1 Kg"] },
    
    { name: "Brinjal", image: "https://www.ohhoexpress.online/image/admin/1656418096_1600768156_Brinjal.jpg", price: 60.5, weightOptions: ["1 Kg"] },
    { name: "Drumstick Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNxX9qC_G_RmuvjqI9uC9vJHb2jK3aypphw&s", price: 24, weightOptions: ["250 g"] },
    { name: "Potato", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUTq8NzsZagFzAHi2NKr-0RXYeoBiuFCQGQ&s", price: 27.33, weightOptions: ["1 Kg"] },
    { name: "Tomato", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s", price: 28, weightOptions: ["1 Kg"] },
    { name: "Bitter Gourd", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPczq-YyOgA_GWmPFjGeoGg8JL_gH4r27jw&s", price: 66, weightOptions: ["1 Kg"] },
    { name: "Beans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0M_NrZnHdoTGd0YSwUygeb88xuYncdQXBWQ&s", price: 90, weightOptions: ["1 Kg"] },
  ];

  return (
    <div className="vegetables-container">
      {/* Navbar */}
      <nav className="vegetables-navbar">
        <div className="logo-name-container">
          <a href="/" className="logo-link">
            <img 
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx" 
              alt="Store Logo" 
              className="store-logo"
            />
          </a>
          <h1 className="store-name">Ideal Grocery Store</h1>
        </div> <div className="search-box">
      <input 
  type="text" 
  placeholder="🔍 search for products..." 
  value={searchQuery} 
  onChange={(e) => setSearchQuery(e.target.value)} 
/>
<button onClick={handleSearch}>Search</button>
      </div>
        <div className="nav-icons">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} color="black" />
          </Link>  
          <Link to="/" className="home-icon">
            <AiFillHome size={24} color="black" />
          </Link>        
        </div>
      </nav>

      {/* Vegetables Banner */}
      <div className="banner">
        <img 
          src="https://content.jdmagicbox.com/comp/bangalore/x7/080pxx80.xx80.130924173316.i1x7/catalogue/ambrosia-vegetables-malleswaram-bangalore-vegetable-exporters-34hqc2z.jpg"
          alt="Vegetables Banner" 
          className="banner-image" 
        />
        <h2 className="banner-text">VEGETABLES</h2>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <select className="weight-dropdown">
              {product.weightOptions.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
            <p className="product-price">₹ {product.price}</p>
            <button className="add-button">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
