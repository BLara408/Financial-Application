
import React from 'react';
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa6";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import Card from '../components/Cards';
import Document from '../components/Document';
import "./Home.css"
const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Card labelText={"Test"}></Card>
            <Document labelText={"Doc"} 
            paragraphText={"lorem ajusdbiha as dijabwhiud aw d awd awnawdssasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddds"} 
            headingText={"Test"}>
            </Document>
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
