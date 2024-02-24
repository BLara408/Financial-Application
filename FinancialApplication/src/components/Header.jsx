import React from 'react';
import './Header.css'
import logo from '../assets/Bare.png'
const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">Bare</a>
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
