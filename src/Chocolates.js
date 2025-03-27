import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Chocolates.css";

const Chocolate = () => {
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
        navigate("/chocolates"); // Navigate to Vegetables page
      }else {
         alert("Product not found!");
       }
     };

  const products = [
    { name: "Dark Chocolate", image: "https://m.media-amazon.com/images/I/81EAqP0D0+L.jpg", price: 267, weightOptions: ["100g", "250g", "500g"] },
    { name: "Gift Pack", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK1xcGmMLLNVoQzm4c5Iyk0txmv4rDThwGQ&s", price: 930, weightOptions: ["500g", "1kg"] },
    { name: "Mini Sticks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdVTHpfQml9DVFpDTitXBy9ricE5_tcxYMg&s", price: 500, weightOptions: ["200g", "400g"] },
    { name: "Kwality Walls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjNYbKpNs0SIxe7lYsjFyVqEZhu21vt4DRg&s", price: 99, weightOptions: ["150ml", "500ml"] },
    { name: "Lindt Lindor", image: "https://cococart.in/cdn/shop/products/1CH1618.png?v=1674020023&width=990", price: 925, weightOptions: ["200g", "500g", "1kg"] },
    { name: "Kinder Joy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3-nQ889fSJa5Shaf-zNFiWBLoZK20Bs6AA&s", price: 50, weightOptions: ["20g", "50g"] },
    { name: "Ferrero Rocher", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhs3NTCaCQJxogSM1M7TbBQd9neZQneFX4A&s", price: 799, weightOptions: ["200g", "500g"] },
    { name: "Toblerone", image: "https://www.fnp.com/images/pr/l/v20230801143218/goodness-of-toblerone-chocolate-gift-box_1.jpg", price: 350, weightOptions: ["100g", "200g"] },
    { name: "Galaxy Smooth", image: "", price: 250, weightOptions: ["150g", "300g"] },
  ];

  return (
    <div className="chocolate-container">
      <nav className="chocolate-navbar">
        <div className="logo-name-container">
          <Link to="/" className="logo-link">
            <img 
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFdHIW7OhZK04eORjrtxwTyncvr9UzSAmwFva0Qcvw4za519Xx" 
              alt="Store Logo" 
              className="store-logo"
            />
          </Link>
          <h1 className="store-name">Ideal Grocery Store</h1>
        </div>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="🔍 Search for products..." 
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

      <div className="banner">
        <img 
          src="https://img.freepik.com/premium-photo/table-full-chocolates-other-items-including-chocolate-raspberries-other-fruits_909774-200.jpg" 
          alt="Chocolate Banner" 
          className="banner-image" 
        />
        <h2 className="banner-text">CHOCOLATES</h2>
      </div>

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

export default Chocolate;
