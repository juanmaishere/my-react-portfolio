import React, { useState, useEffect } from 'react';
import '../styles/logoslide.css';

function Presentation() {
    const [softwareDeveloperText, setSoftwareDeveloperText] = useState("");
    const [portfolioText, setPortfolioText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);

    const softwareDeveloper = "Software Developer";
    const portfolio = "Portfolio 2024";
    const delayBeforeStart = 3500; // Delay before typing starts (milliseconds)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setStartTyping(true);
        }, delayBeforeStart);

        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        if (startTyping) {
            if (currentIndex < softwareDeveloper.length) {
                const timeoutId = setTimeout(() => {
                    setSoftwareDeveloperText(softwareDeveloper.substring(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, 100); // Adjust typing speed as needed (milliseconds)
                return () => clearTimeout(timeoutId);
            } else if (currentIndex < softwareDeveloper.length + portfolio.length) {
                const timeoutId = setTimeout(() => {
                    const portfolioIndex = currentIndex - softwareDeveloper.length;
                    setPortfolioText(portfolio.substring(0, portfolioIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, 100); // Adjust typing speed as needed (milliseconds)
                return () => clearTimeout(timeoutId);
            }
        }
    }, [currentIndex, startTyping]);

    return (
        <div>
            <div className="row">
                <div className="">
                    <h1>JUAN MANUEL RIVERA</h1>
                    <h2>{softwareDeveloperText}</h2>
                    <p>{portfolioText}</p>
                </div>
                <div className="image">
                    <img src="juan.jpg" alt="Juan Manuel Rivera" />
                </div>
            </div>
        </div>
    );
}

export default Presentation;
