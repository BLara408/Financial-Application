import React from 'react';
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6"
import './Cards.css'

const Card = ({labelText}) => {
    return (
        <div className="card">
            <label htmlFor='text'>{labelText}</label>
        </div>
    );
};

export default Card;

