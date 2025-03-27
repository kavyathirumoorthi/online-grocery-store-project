import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Fruits.css";

const Fruits = () => {
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
    const addToCart = (product) => {
      axios.post("http://localhost:5004/add-item", { 
        name: product.name, 
        image: product.image, 
        price: product.price, 
        quantity: 1 // Default quantity as 1
      })
      .then(() => alert(`${product.name} added to cart!`))
      .catch(error => console.error("Error adding to cart:", error));
    };
  const products = [
    { name: "Baby Apple Shimla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-AI1uXb6sHOmrE4_ZkbPkCMA0ONCZdxAnw&s", price: 189, weightOptions: ["1 Kg", "2 Kg", "3 Kg"] },
    { name: "Orange", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2cYfV0Q7fxNoQpNly2bcCaJUOXnbl73y9A&s", price: 203.83, weightOptions: ["1 Kg", "3 Kg"] },
    { name: "Kiwi-green", image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/4f85d7e6-2b92-4bfe-8d23-deadcfbc179f/kiwi-aedbdbf-510x-progressive.webp", price: 140, weightOptions: ["3 pcs"] },
    { name: "Mango", image: "https://www.bigbasket.com/media/uploads/p/l/30000974_12-fresho-kesar-mango.jpg", price: 127.12, weightOptions: ["1 Kg"] },
    { name: "Banana-Robusta", image: "https://www.bigbasket.com/media/uploads/p/xxl/40179390_8-fresho-baby-banana-robusta.jpg", price: 48, weightOptions: ["1 Kg"] },
    { name: "Pomegranate", image: "https://m.media-amazon.com/images/I/611a1wD9ZGL.jpg", price: 220, weightOptions: ["1 Kg"] },
    // New Fruits
    { name: "Blueberry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo9YqLwzOtb6V73ksa5X1qfb-Agcmjk6MOA&s", price: 207, weightOptions: ["125 g"] },
    { name: "Guava", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgisUXb-Q89TsR1PqBicHpoqDrJ6nPngC1w&s", price: 90, weightOptions: ["3 Kg","2 Kg"] },
    { name: "Papaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwvWLsNB8IQTZCy5e-Xm_oGW_N_tUzMMNxw&s", price: 71.33, weightOptions: ["1 Kg"] },
    { name: "Pineapple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalOobAqOASqcR4BC7YP7xJIsgQxv-My8Vnw&s", price: 84.33, weightOptions: ["1 Kg"] },
    { name: "Grapes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVoGDGTIJ5KsXDdKnAE-1zWa8rhm5LZOqeg&s", price: 108.5, weightOptions: ["1 Kg"] },
    { name: "Watermelon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0qedAEEvk9S0-G_e3ur6BXTD_5k7UJ4Cog&s", price: 93.1, weightOptions: ["1 pc"] },
  ];

  return (
    <div className="fruits-container">
      {/* Navbar */}
      <nav className="fruits-navbar">
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

      {/* Fruits Banner */}
      <div className="banner">
<img 
  src="https://media.istockphoto.com/id/1175287705/photo/fruit-and-vegetables-in-a-basket.jpg?s=612x612&w=0&k=20&c=QwqK7EDdje6guePNhWg_bbcX1ozWDeqlE5p_TbaCbfA=" 
  alt="Fresh Fruits Banner" 
  className="banner-image" 
/>
        <h2 className="banner-text">FRUITS</h2>
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
            <button className="add-button" onClick={() => addToCart(product)}>Add</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
