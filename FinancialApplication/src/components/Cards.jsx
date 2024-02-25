import React from 'react';
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6"
import './Cards.css'

const Card = ({labelText, headingText,path, image}) => {
    return (
    <Link to={path} className="card-link">
        <div className="card">
            <div className="image-container">
                <img src={image} alt="Card Image" />
            </div>
            <label htmlFor='text'>{labelText}</label>
            <h2>{headingText}</h2>
        </div>
    </Link>
        
    );
};

export default Card;

