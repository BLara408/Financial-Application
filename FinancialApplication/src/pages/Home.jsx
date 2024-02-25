
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
            <Card labelText={"Investign 101"}></Card>
            <Document labelText={"Investing 101"} 
            paragraphText={`lorem ajusdbiha as dijabwhiud aw d awd awnawdssasddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddds
            sdddjanjicnaejicnjiencoienconeiocnwencijowenconweocnwe
            ecwjiencjiwen cji wejic wje cjiwe cijw ecij wejic we
            cmowencowe cojw eojc weoj cojwe coj weoc owje cjowec
             jowe cowe ocj wejoc jowe cjiwe cjiw e
             we jc qo cokq cwe 0 qo vojwe ovj ewjov weojmoqwdmi0q
             qnwodiqn wodnqwdnoqwndoqndioqd`} 
            headingText={"How to get into investing"}>
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
