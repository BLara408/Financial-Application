
import React from 'react';
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa6";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import "./Home.css"
const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className = "icon-container">
                <Link to="/home"><FaHouse size={32} color = "lightblue" /></Link>
                <Link to="/investment"><FaArrowTrendUp size={32}color = "lightblue"/></Link>
                <Link to="/savings"><FaPiggyBank size={32} color = "lightblue"/></Link>
                <Link to="/opportunities"><FaArrowUpFromGroundWater size={32}color = "lightblue" /></Link>
            </div>
        </div>
    );
};

export default HomePage;
