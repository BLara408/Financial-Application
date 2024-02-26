import React from 'react';
import './Header.css'
import icon from '../assets/icon.png'
const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">
                <img src={icon} className="logo-img"></img>
            </a>
            <div className="header-right">
                <a href="/home">Home</a>
                <a href="/investment">Investment</a>
                <a href="/savings">Savings</a>
                <a href="/opportunities">Opportunities</a>
            </div>
        </div>
    );
};

export default Header;
