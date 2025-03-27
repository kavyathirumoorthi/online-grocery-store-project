import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios"; 
import "./Cart.css"; // Import the CSS file

const Cart = () => {
   const [cartItems, setCartItems] = useState([]); // Cart state
   const navigate = useNavigate();

   useEffect(() => {
    axios.get("http://localhost:5004/cart-items")
      .then(response => setCartItems(response.data))
      .catch(error => console.error("Error fetching cart items:", error));
  }, []);
  

   // Handle item removal
   const removeItem = (id) => {
     axios.delete(`http://localhost:5004/remove-item/${id}`)
       .then(() => {
         setCartItems(prevItems => prevItems.filter(item => item._id !== id));
       })
       .catch(error => console.error("Error removing item:", error));
   };

   return (
    <div className="cart-container">
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

        <nav>
          <Link to="/" className="home-icon">
            <AiFillHome size={24} color="black" />
          </Link>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} color="black" />
          </Link>
        </nav>
      </header>

      {/* Cart Items Section */}
      <div className="cart-box">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img
              src="https://img.freepik.com/premium-vector/green-supermarket-shopping-basket-full-fruits-modern-flat-cute-illustration_652800-2.jpg?w=360"
              alt="Empty Cart"
              className="cart-image"
            />
            <h2 className="cart-message">Let’s fill the empty basket</h2>
            <button className="continue-btn" onClick={() => navigate("/")}>
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
