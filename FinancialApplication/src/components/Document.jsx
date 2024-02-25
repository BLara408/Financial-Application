import React, { useState, useEffect } from 'react';
import './Document.css';

const Document = ({ labelText, headingText, paragraphText }) => {
    const [cardHeight, setCardHeight] = useState('auto');

    useEffect(() => {
        // Dynamically adjust the card height based on the content of the paragraph
        const paragraphElement = document.getElementById('paragraph');
        if (paragraphElement) {
            const paragraphHeight = paragraphElement.clientHeight;
            setCardHeight(paragraphHeight + 120); // Add some padding and margin
        }
    }, [paragraphText]);

    return (
        <div className="doc-card" style={{ height: cardHeight }}>
            <label htmlFor='text'>{labelText}</label>
            <div className="doc">
                <h2>{headingText}</h2>
                <p id="paragraph">{paragraphText}</p>
            </div>
        </div>
    );
};

export default Document;
