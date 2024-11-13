import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ cartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => alert(`Searching for: ${searchQuery}`);
  const handleCartClick = () => navigate('/cart');
  const handleProfileClick = () => navigate('/profile');
  const handleLogin = () => navigate('/Login');
  return (
    <nav>
      <div className="navbar-top">
        <div className="logo" onClick={() => navigate('/')}>
          Grocery<span>Store</span>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="cart-profile">
          <div onClick={handleLogin}>
            Login
          </div>
          <div className="cart" onClick={handleCartClick}>
            Cart ({cartCount}) {/* Display the cart count */}
          </div>
          <div className="profile" onClick={handleProfileClick}>
            Profile
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="category-dropdown">
     
         
        </div>
      </div>
    </nav>
  );
};
export default Navbar;