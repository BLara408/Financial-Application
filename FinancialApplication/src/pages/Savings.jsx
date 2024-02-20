import React from 'react';
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6"

const SavingsPage = () => {
    return (
        <div>
            <Link to ="/home"><FaHouse size={32}/></Link>
            <h1>Savings</h1>
        </div>
    );
};

export default SavingsPage;
