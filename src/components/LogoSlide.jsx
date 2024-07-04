import React from 'react';
import '../styles/logoslide.css'
import {useEffect } from 'react';


function Logoslide() {
    useEffect(() => {
      const logoSlide = document.querySelector('.logo-slide');
  
      if (logoSlide) {
        logoSlide.addEventListener('mouseover', function () {
          logoSlide.style.animationPlayState = 'paused';
        });
  
        logoSlide.addEventListener('mouseout', function () {
          logoSlide.style.animationPlayState = 'running';
        });
      }
    }, []);
  
    return (
      <div>
      
        <div className="logo-container">
          <div className="logo-slide">
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
            <img src="flask.svg" alt="Partner 1" />
            <img src="flutter.svg" alt="Partner 2" />
            <img src="html.svg" alt="Partner 3" />
            <img src="mysql.svg" alt="Partner 4" />
            <img src="nodejs.svg" alt="Partner 5" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Logoslide;