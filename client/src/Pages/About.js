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
      <i class="fab fa-github"></i>
      <a href="https://github.com/gmenke54" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/grantmenke/" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>
      <i class="fab fa-linkedin"></i>
      </div>

    {/* Lieba */}
      <h3>Lieba Pil</h3>
      <div>
      <i class="fab fa-github"></i>
      <a href="https://github.com/liebapil" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/lieba-pil/" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>
      <i class="fab fa-linkedin"></i></div>
      
      {/* Doran */}
      <h3>Doran Smith</h3>
      <div>
      <i class="fab fa-github"></i>
      <a href="https://github.com/andora814" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/dorancsmith/" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>
      <i class="fab fa-linkedin"></i> 
      </div>
      
      {/* Joseph */}
      <h3>Joseph Venable</h3>
      <div>
      <i class="fab fa-github"></i>
      <a href="https://github.com/JJVenable" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/jjvenable" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>
      <i class="fab fa-linkedin"></i> 
      </div>
    
    </div>
  );
}

export default About;
