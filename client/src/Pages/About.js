// import { connect } from 'react-redux';
import React from 'react';
import '../styling/Icons.css';

function About() {
  return (
    <div className="about-page">
      <h2>Follow the Devs</h2>
      {/* Grant */}
      <div>

        <h3>Grant Menke</h3>
        <i className="fab fa-github"></i>
        <a href="https://github.com/gmenke54" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/grantmenke/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        <i className="fab fa-linkedin"></i>

      </div>

      {/* Lieba */}
      <h3>Lieba Pil</h3>
      <div>

        <i className="fab fa-github"></i>
        <a href="https://github.com/liebapil" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/lieba-pil/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        <i className="fab fa-linkedin"></i></div>

      {/* Doran */}
      <h3>Doran Smith</h3>
      <div>
        <i className="fab fa-github"></i>
        <a href="https://github.com/andora814" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/dorancsmith/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        <i className="fab fa-linkedin"></i>

      </div>

      {/* Joseph */}
      <h3>Joseph Venable</h3>
      <div>

        <i className="fab fa-github"></i>
        <a href="https://github.com/JJVenable" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/jjvenable" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        <i className="fab fa-linkedin"></i>

      </div>

      <h4>Resources</h4>
      <div className='citations'>
        <a href='https://www.canva.com' target="_blank" rel="noopener noreferrer" className="link">Canvas</a>
        <a href='https://developers.google.com/books' target="_blank" rel="noopener noreferrer" className="link">Google API</a>
        <a href='https://www.geeksforgeeks.org/why-we-use-then-method-in-javascript' target="_blank" rel="noopener noreferrer" className="link">Canvas</a>
        <a href='https://fontawesome.com' target="_blank" rel="noopener noreferrer" className="link">Font Awesome</a>
      </div>

    </div>
  );
}

export default About;
