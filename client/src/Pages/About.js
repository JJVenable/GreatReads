import { connect } from 'react-redux';
import React, { useEffect } from 'react';

function About() {
  return (
    <div className="about-page">
      <h2>Meet the Devs</h2>
      <h3>Grant Menke</h3>
      <a href="https://github.com/gmenke54">GitHub</a>
      <div></div>
      <a href="https://www.linkedin.com/in/grantmenke/">LinkedIn</a>
      <h3>Lieba Pil</h3>
      <a href="https://github.com/liebapil">GitHub</a>
      <div></div>
      <a href="https://www.linkedin.com/in/lieba-pil/">LinkedIn</a>
      <h3>Doran Smith</h3>
      <a href="https://github.com/andora814">GitHub</a>
      <div></div>
      <a href="https://www.linkedin.com/in/dorancsmith/">LinkedIn</a>
      <h3>Joseph Venable</h3>
      <a href="https://github.com/JJVenable">GitHub</a>
      <div></div>
      <a href="https://www.linkedin.com/in/jjvenable">LinkedIn</a>
    </div>
  );
}

export default About;
