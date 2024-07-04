import React, { useEffect, useState } from 'react';
import '../styles/headerstyle.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close menu after clicking a link
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="head">
            <nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <div className={`internal-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')}>
                        INICIO
                    </a>
                    <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                        SOBRE MI
                    </a>
                    <a href="#proyects" onClick={(e) => handleLinkClick(e, 'projects')}>
                        PROYECTOS
                    </a>
                    <a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}>
                        CONTACTO
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
