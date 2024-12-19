import React from 'react';
import './Portoflio.css'
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <section className="portfolio-section">
        <h2 className="section-title">Portfolio Statement</h2>
        <p className="statement">
          As a passionate computer science student, I am dedicated to bridging the gap between theoretical concepts and practical applications. My portfolio showcases a diverse range of projects that reflect my commitment to innovation and problem-solving. From developing sophisticated deep learning models to creating interactive web applications, each project highlights my technical skills, creativity, and ability to collaborate effectively in team settings. I strive to stay at the forefront of technology, continuously expanding my knowledge and expertise in areas such as artificial intelligence, software development, and data analysis.
        </p>
      </section>

      <section className="future-work-section">
        <h2 className="section-title">Future Work Statement</h2>
        <p className="statement">
          Looking ahead, my goal is to leverage my skills in computer science to make a meaningful impact in the tech industry. In the short term, I plan to deepen my understanding of advanced machine learning techniques and gain hands-on experience through internships and collaborative projects. Long-term, I aspire to contribute to cutting-edge research or innovative solutions that address real-world challenges. I am committed to lifelong learning, actively engaging with the tech community, and embracing opportunities for growth. By fostering a mindset of curiosity and resilience, I aim to be at the forefront of technological advancements that shape our future.
        </p>
      </section>
      <br /> <br />
    </div>
    
  );
};

export default Portfolio;
