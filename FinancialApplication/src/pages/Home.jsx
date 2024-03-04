
import React from 'react';
import { Link } from 'react-router-dom'
import investmentImage from '../assets/investing.jpg'
import Card from '../components/Cards';
import Document from '../components/Document';
import savingImage from '../assets/savings.jpg'
import "./Home.css"
import IncomeForm from '../components/IncomeForm';
const HomePage = () => {
    return (

        <div >
            <Document
            headingText={"Journey To financial Literacy"}
            paragraphText={`Hello! Glad you made it here to learn about financial literacy. 
            Bare financial is a financial platform made to help you make more informed decisions with
            your money. Here you can learn about topics like investing, saving and general financial tips.`}
            />
            <Card headingText={"Getting started on your financial literacy path" } path={"/savings"} image={savingImage} labelText={"Click here to get started"}></Card>

        </div>
        
   
    
    );
};

export default HomePage;
