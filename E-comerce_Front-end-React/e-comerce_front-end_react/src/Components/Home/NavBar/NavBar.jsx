import React from 'react';
import Logo from "./Logo/Logo";
import { useNavigate } from 'react-router-dom';

function NavBar({ isVendor }) {
    const navigate = useNavigate();

    function navigation(event) {
        event.preventDefault();
        navigate("/login");
    }

    return (
        <div className="navbar-container">
            <Logo />
            {/* Ajoutez ici le contenu commun de votre barre de navigation */}
            <div className="navbar-links">
                <div className="nav-link1">Home</div>
                <div className="nav-link2">Products</div>
                <div className="nav-link3">About Us</div>
            </div>
            {/* Ajoutez ici le contenu spécifique en fonction du type de l'utilisateur */}
            {isVendor && <div>Vendor-specific content</div>}
            <button onClick={navigation} className="signin-button">Sign In</button>
        </div>
    );
}

export default NavBar;
