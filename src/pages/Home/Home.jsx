import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            
            {/* Hero Section */}
            <section className="hero">
                <h1>Hi, I'm Muhammad Abbas</h1>
                <p>Aspiring Software Engineer & AI Enthusiast</p>
                <div className="hero-buttons">
                    <NavLink to="/portfolio" className="btn-primary">Explore My Work</NavLink>
                    <NavLink to="/resume" className="btn-secondary">Download Resume</NavLink>
                </div>
            </section>

            {/* Short Introduction */}
            <section className="introduction">
                <p>
                    I'm a computer science student passionate about artificial intelligence, machine learning, and full-stack web development. Currently pursuing my degree at UIHE[Uswa Institude of Higher education] Islamabad, I enjoy solving real-world problems through innovative software solutions.
                </p>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    <span>Python</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>AI</span>
                    <span>C++</span>
                    <span>Git</span>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="projects">
                <h2>Featured Projects</h2>
                <div className="project-list">
                    <div className="project-item">
                        <p>Personal statement website using react js</p>
                    </div>
                    <div className="project-item">
                        <h3>Portfolio Website</h3>
                        <p>A responsive web app built with React and Node.js</p>
                    </div>
                </div>
                <NavLink to="/Projects" className="btn-primary">See All Projects</NavLink>
            </section>
         
        </div>
    );
};

export default Home;