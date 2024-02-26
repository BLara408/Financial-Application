
import React from 'react';
import { Link } from 'react-router-dom'
import investmentImage from '../assets/investing.jpg'
import Card from '../components/Cards';
import Document from '../components/Document';
import savingImage from '../assets/savings.jpg'
import "./Home.css"
const HomePage = () => {
    return (
    <div className="card-container">
        <div className="top-cards">
            <Card 
                labelText={"Savings:"}
                headingText={"Learn the strategies of saving money."}
                path={"/savings"}
                image={savingImage}
            />
            <Card 
                labelText={"Investing"}
                headingText={"Beginner Investing Guide."}
                path={"/investment"}
                image={investmentImage}
            />
        </div>
        <div className="bottom-card">
            <Card 
                labelText={"Investing"}
                headingText={"Beginner Investing Guide"}
                path={"/investment"}
                image={savingImage}
            />
        </div>
    </div>
          
    );
};

export default HomePage;
