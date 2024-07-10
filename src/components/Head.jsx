import React from 'react';
import { Helmet } from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="description" content="Explora mi nuevo portfolio web con innovaciones en 3D usando React.js y Three.js." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JuanDEV Portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+US+Modern:wght@100..400&family=Sometype+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />

      {/* Metatags para redes sociales */}
      <meta property="og:title" content="JuanDEV Portfolio" />
      <meta property="og:description" content="Explora mi nuevo portfolio web con innovaciones en 3D usando React.js y Three.js." />
      <meta property="og:url" content="https://juanriveraportfolio.netlify.app/" />
    </Helmet>
  );
}

export default Head;
