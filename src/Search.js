import React from "react";
import "./Search.css"; // Import the CSS file

const Search = () => {
  return (
    <div className="search-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="store-name">🍃 Ideal Grocery Store</h1>
        <button onClick={() => console.log("Search clicked!")}>Search</button>
        </nav>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="search for products" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
