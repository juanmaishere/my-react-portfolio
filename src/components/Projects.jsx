import React, { useEffect } from 'react';
import '../styles/projects.css'; // Adjust the path as necessary

const projects = [
  {
    name: 'LaFabrica',
    imgSrc: 'images/fabrica.png',
    gifSrc: '/video/gif2.gif',
    altText: 'LaFabrica Web',
    link: 'https://lafabricafiestasyeventos.netlify.app/',
  },
  {
    name: 'Estudio Juridico',
    imgSrc: 'images/estudio.png',
    gifSrc: '/video/gif2.gif',
    altText: 'Estudio Juridico',
    link: 'https://lafabricafiestasyeventos.netlify.app/',
  },
  {
    name: 'Academia713',
    imgSrc: 'images/academia.png',
    gifSrc: '/video/gif1.gif',
    altText: 'Academia de manejo',
    link: 'https://lafabricafiestasyeventos.netlify.app/',
  },
  // Add more projects as needed
];


const Projects = () => {
  useEffect(() => {
    const gifs = document.querySelectorAll('.gif');
    gifs.forEach((gif) => {
      gif.addEventListener('mouseover', () => {
        gif.src = gif.getAttribute('data-src');
      });
      gif.addEventListener('mouseout', () => {
        gif.src = gif.getAttribute('data-static');
      });
    });
  }, []);

  return (
    <div className="sectionx">
      <div class="hero-container">
    <div class="environment"></div>
    <h2 class="hero glitch layers" data-text="近設計"><span>Projects</span></h2>
  </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.imgSrc} alt={project.altText} className="static-img" />
            <img
              src={project.gifSrc}
              alt={project.altText}
              className="gif"
              data-src={project.gifSrc}
              data-static={project.imgSrc}
            />
            <div className="overlay">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
