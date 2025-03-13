import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa";
import "./Beverages.css";

const Beverages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();

    if (query === "fruits") {
      navigate("/fruits");
    } else if (query === "vegetables") {
      navigate("/vegetables");
    } else if (query === "beverages") {
      navigate("/beverages"); // Navigate to Beverages page
    } else {
      alert("Product not found!");
    }
  };

  const products = [
    {
      id: 1,
      name: "Healthy Alternatives Digestive Tea",
      price: 375,
      image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd5035af-fe92-471c-9e6b-de36c4200fcc_425x425.jpg", // Replace with actual image URL
      quantityOptions: ["1 pc"],
    },
    {
      id: 2,
      name: "Raw Pressery Orange",
      price: 399 ,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AowlOr9yjNyd2XmSjO0QqBxLd7PsSrN0eA&s",
      quantityOptions: ["1 pc"],
    },
    {
      id: 3,
      name: "Coca Cola",
      price: 36,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355071947/JZ/ZP/EO/199268574/coca-cola-200-ml-glass-bottle.jpg",
      quantityOptions: ["1 pc"],
    },
    {
      id: 4,
      name: "Bayars Coffee - Eighty Degree",
      price: 235,
      image: "https://m.media-amazon.com/images/I/71iWNw-YybL.jpg",
      quantityOptions: ["500 g"],
    },
    {
      id: 5,
      name: "Mango Juice",
      price: 19,
      image: "https://www.bigbasket.com/media/uploads/p/l/1221682-2_1-fresho-signature-mango-juice-cold-pressed-no-added-sugar-preservative-free.jpg",
      quantityOptions: ["150 ml"],
    },
    {
      id: 6,
      name: "Bournvita",
      price: 30,
      image: "https://m.media-amazon.com/images/I/61oRJDWrXRL.jpg",
      quantityOptions: ["70 g"],
    },
    {
        id: 7,
        name: "Chocolate Milk Mix",
        price: 375,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCxcZCxrW26GSn41Q8DTBbyEKeP0OtCS5LQ&s", 
        quantityOptions: ["1 pc"],
      },
      {
        id: 8,
        name: "Hot Chocolate Milk",
        price: 399,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOLsRhnv1ykPszZBDTv1jQIXmMTBxbasdJQ&s",
        quantityOptions: ["1 pc"],
      },
      {
        id: 9,
        name: "Promiva (Unavailable)",
        price: 36,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/5/305433295/HO/YQ/BL/3259541/simethicone-oral-suspension-syrup-500x500.jpeg",
        quantityOptions: ["1 pc"],
      },
      {
        id: 10,
        name: "Nutrition Drink",
        price: 299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2IUD56JQ7d7x574GHiJf2GiZPByEa8mCAw&s",
        quantityOptions: ["450 g"],
      },
      {
        id: 11,
        name: "Badam Drink Mix",
        price: 270,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttR_9txCpr_nGeHKw8AFb_-QmQXAwFOxmOw&s",
        quantityOptions: ["500 g"],
      },
      {
        id: 12,
        name: "Chocolate Syrup",
        price: 321,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_97IuAx7LfWccTR3zYnQMoSTs4qah_GaXCw&s",
        quantityOptions: ["1 kg"],
        
      },
  ];

  return (
    <div className="beverages-container">
      {/* Navbar */}
      <nav className="beverages-navbar">
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

      {/* Beverages Banner */}
      <div className="banner">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/026/500/574/small/summer-refreshing-beverages-photo.jpg" 
          alt="Beverages Banner" 
          className="banner-image" 
        />
        <h2 className="banner-text">BEVERAGES</h2>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <select className="weight-dropdown">
              {product.quantityOptions.map((option, idx) => (
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

export default Beverages;
