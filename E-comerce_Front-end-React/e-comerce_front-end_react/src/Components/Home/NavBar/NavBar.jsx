import React from 'react';
import './NavBar.css'; // Importing the CSS file
import Logo from "./Logo/Logo";

export default function NavBar() {
    return (
        <div className="navbar-container">
            <Logo />

            <div className="navbar-links">
                <div className="nav-link">Home</div>
                <div className="nav-link">Products</div>
                <div className="nav-link">About Us</div>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <div className="search-icon"></div>
            </div>

            <div className="cart-icon"></div>
            <div className="signin-button">Sign In</div>
        </div>
    );
}
