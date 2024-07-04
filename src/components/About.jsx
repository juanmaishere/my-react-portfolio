import React, { useState, useEffect, useRef } from "react";
import Model2 from './Modelo'; // Adjust the path as necessary
import '../styles/about.css';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");
    const introText = "and creating websites that provide a unique user experience. With a keen eye for detail and a strong interest in the IT world, I have been part of projects that have given me the necessary knowledge to create applications from scratch, develop my soft skills, and work in multidisciplinary groups. I'm currently using HTML, CSS, JavaScript, React and Astro as the primary technologies in my projects, but I also possess expertise in other tech stacks like Node.js, Flutter, Google Cloud Platform (GCP), and PostgreSQL.";
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 }); // Trigger when 50% of the element is in view

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect(); // Cleanup

    }, []);

    useEffect(() => {
        if (isVisible) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= introText.length) {
                    setText(introText.substring(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 38); // Adjust typing speed as needed (milliseconds)

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [isVisible]);

    return (
        <div className="column">
            <div className="sec" ref={sectionRef}>
                <div className="text">
                    <p>Hi! My name is Juan Manuel Rivera, and I'm a Software and Frontend Developer based in Uruguay with a strong passion for designing {text}</p>
                </div>
                <div className='modelo'>
                    <Model2></Model2>  
                </div>
            </div>
            <div className="logoslidex">
                {/* Add LogoSlide component or content here */}
            </div>
        </div>
    );
}

export default About;
