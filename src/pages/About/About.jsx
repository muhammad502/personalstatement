import React from 'react';
import './About.css'; // Assuming you create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Hello! I'm Muhammad Abbas, a passionate computer science student dedicated to leveraging technology to solve real-world problems. Currently pursuing my degree, I am enthusiastic about learning and applying various aspects of computer science, including software development, data analysis, and machine learning.
      </p>
      
      <h2 className="section-title">My Journey</h2>
      <p className="about-text">
        My journey in computer science began with a fascination for coding and problem-solving. Throughout my academic career, I have worked on several projects, including [mention a notable project or two], which have allowed me to refine my skills and deepen my understanding of complex systems.
      </p>

      <h2 className="section-title">Interests</h2>
      <p className="about-text">
        I am particularly interested in:
        <ul className="interests-list">
          <li>Machine Learning & Artificial Intelligence</li>
          <li>Web Development</li>
          <li>Data Science and Analytics</li>
          <li>Cloud Computing</li>
        </ul>
      </p>

      <h2 className="section-title">Future Aspirations</h2>
      <p className="about-text">
        Looking ahead, I aspire to contribute to innovative projects in the tech industry, either through research or practical applications. I am eager to continue learning, growing, and collaborating with like-minded individuals in this ever-evolving field.
      </p>
    </div>
  );
};

export default About;
