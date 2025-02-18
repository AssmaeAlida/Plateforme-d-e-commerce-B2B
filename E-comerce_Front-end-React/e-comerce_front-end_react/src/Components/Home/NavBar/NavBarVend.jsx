import './NavBar.css'; // Importing the CSS file
import Logo from "./Logo/Logo";
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBarVend({src , alt}) {

    const navigate = useNavigate();
    const location = useLocation();

    function navigation1(event){
        event.preventDefault();
        navigate("/Profile");
    }
    function navigation3(event){
        event.preventDefault();
        navigate("/homeVend");
    }
    function navigation2(event){
        event.preventDefault();
        navigate("/MyStore"); // Naviguer vers la page My Store
    }
    const isActive = (path) => {
        return location.pathname === path;
    };


    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className="navbar-container">
            <Logo />
            <div className="navbar-links">
                <div className={`nav-link1 ${isActive('/') ? 'active' : ''}`}onClick={navigation3} >Home</div>
                <div className={`nav-link2 ${isActive('/products') ? 'active' : ''}`} >Products</div>
                <div className={`nav-link2 ${isActive('/MyStore') ? 'active orange' : ''}`} onClick={navigation2}>My Store</div>
                <div className={`nav-link3 ${isActive('/about') ? 'active' : ''}`} >About Us</div>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M16.031 15.1118L20.314 19.3685L18.899 20.7752L14.617 16.5174C13.0237 17.7871 11.042 18.4777 9 18.4748C4.032 18.4748 0 14.4666 0 9.52794C0 4.58926 4.032 0.581055 9 0.581055C13.968 0.581055 18 4.58926 18 9.52794C18.0029 11.5579 17.3082 13.5279 16.031 15.1118ZM14.025 14.3742C15.2941 13.0768 16.0029 11.3376 16 9.52794C16 5.68376 12.867 2.56925 9 2.56925C5.133 2.56925 2 5.68376 2 9.52794C2 13.3721 5.133 16.4866 9 16.4866C10.8204 16.4895 12.5699 15.7849 13.875 14.5233L14.025 14.3742Z" fill="#878787"/>
                </svg>
                </div>
            </div>

            <div className="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" viewBox="0 0 36 38" fill="none">
                <path fillRule="./evenodd1" clipRule="./evenodd1" d="M10.8541 1.9968C11.4126 0.818688 12.6176 0 14.0101 0H21.9899C23.3824 0 24.5854 0.818688 25.1459 1.9968C26.5085 2.00878 27.5718 2.07068 28.5214 2.44209C29.655 2.88592 30.6409 3.64019 31.3662 4.6186C32.0984 5.60502 32.4435 6.86899 32.9143 8.6082L34.3946 14.0435L34.9532 15.7228L35.001 15.7827C36.7985 18.087 35.9427 21.5135 34.231 28.3645C33.1417 32.7236 32.5991 34.9021 30.9752 36.172C29.3513 37.44 27.107 37.44 22.6183 37.44H13.3817C8.89301 37.44 6.64868 37.44 5.02478 36.172C3.40088 34.9021 2.85626 32.7236 1.76901 28.3645C0.0573308 21.5135 -0.798507 18.087 0.998952 15.7827L1.04683 15.7228L1.60542 14.0435L3.08568 8.6082C3.55849 6.86899 3.90361 5.60302 4.63377 4.6166C5.35939 3.63893 6.34524 2.88537 7.47858 2.44209C8.42818 2.07068 9.4895 2.00678 10.8541 1.9968ZM10.858 4.99799C9.53738 5.01197 9.00672 5.06189 8.56783 5.23361C7.9573 5.47259 7.42634 5.8788 7.0357 6.40573C6.68459 6.87898 6.47711 7.53992 5.89857 9.6705L4.76145 13.8418C6.79631 13.4784 9.57728 13.4784 13.3797 13.4784H22.6183C26.4227 13.4784 29.2017 13.4784 31.2366 13.8378L30.1014 9.66651C29.5229 7.53592 29.3154 6.87498 28.9643 6.40174C28.5737 5.8748 28.0427 5.4686 27.4322 5.22962C26.9933 5.05789 26.4626 5.00797 25.142 4.994C24.8587 5.59073 24.4122 6.09487 23.8543 6.44794C23.2964 6.80101 22.65 6.98855 21.9899 6.9888H14.0101C13.3502 6.98873 12.7039 6.80149 12.1461 6.44879C11.5882 6.09608 11.1416 5.59435 10.858 4.99799Z" fill="#9A9A9A"/>
            </svg>
            </div>
            <div className='image-profile' onClick={toggleDropdown}>
              <img src={src} alt={alt}/>
              {showDropdown && (
                    <div className="profile-dropdown">
                        <div>View Info</div>
                        <div  onClick={navigation1}>My Profile</div>
                        <div>Create My Store</div>
                        <div onClick={navigation2}>Log Out</div>
                    </div>
                )}
            </div>
        </div>
    );
}
