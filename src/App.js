import React from 'react';
import './App.css';
import Model from './components/Model'; // Adjust the path as necessary
import Starfield from './components/Starfield'; // Adjust the path as necessary
import Header from './components/Header'
import Head from './components/Head'
import Presentation from './components/Presentation';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Head></Head>
      <Header></Header>
      <main>
        <div className="viewer-container">
          <Starfield />
          <div className="model-wrapper">
            <Model />
          </div>
            <Presentation></Presentation>
        </div>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;