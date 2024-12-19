import React, { useState } from 'react';
import './Resume.css'

function Resume() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <div className={`resume-container ${darkMode ? 'dark' : ''}`}>
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                <header>
                    <h1>Muhammad Abbas</h1>
                    <p>Email: muhammad35090.com | Phone: +92 3109235090</p>
                    <p>LinkedIn: <a href="#">Your LinkedIn URL</a> | GitHub: <a href="#">Your GitHub URL</a></p>
                    <p>Portfolio: <a href="#">Your Portfolio URL</a></p>
                </header>

                <section className="section">
                    <div className="section">
                        <h2>Objective:</h2>
                        <p>A passionate Computer Science student with hands-on experience in developing responsive and dynamic web applications using React.js, HTML5, CSS3, and JavaScript. Looking for opportunities to contribute to innovative projects and enhance my skills in front-end development.</p>
                    </div>
                    </section>

                    <section className="section">
                    <div className="section">
                        <h2>Education:</h2>
                        <p><strong>Bachelor of Science in Computer Science</strong><br />
                            UIHE(Uswa Institude of Higher Education), Islamabad, Pakistan<br />
                            Expected Graduation: april, 2026</p>
                        <p>Relevant Courses: Data Structures, Web Development, Artificial Intelligence, Software Engineering, Database Systems, Algorithms</p>
                    </div>
                </section>

                <section className="section">
                    <h2>Skills:</h2>
                    <ul>
                        <li><strong>Frontend Development:</strong> React.js, HTML5, CSS3, JavaScript (ES6+), JSX, Bootstrap, Responsive Web Design</li>
                        <li><strong>CSS Frameworks:</strong> Tailwind CSS, Material-UI</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>
                        <li><strong>Tools & Technologies:</strong> Webpack, NPM, VS Code, Figma</li>
                        <li><strong>Languages:</strong> Python, C++, SQL</li>
                        <li><strong>Responsive Design:</strong> Media Queries, Flexbox, Grid</li>
                    </ul>
                </section>

                <section className="section">
                    <h2>Projects:</h2>
                    <ul>
                        <li><strong>Personal Portfolio Website:</strong> Developed a responsive portfolio website using React.js and CSS3.</li>
                        <li><strong>E-commerce Website:</strong> Designed a user-friendly e-commerce site with Firebase for real-time database management.</li>
                        <li><strong>Weather App:</strong> Built a React.js app to display weather data using OpenWeather API, styled with CSS Grid and Flexbox.</li>
                    </ul>
                </section>

                <section className="section">
                    <h2>Experience:</h2>
                    <p><strong>Frontend Developer Intern</strong><br />
                        Company Name, Bahawalpur, Pakistan<br />
                        March, 2021 – August, 2021</p>
                    <p>Collaborated with the development team to build and enhance front-end interfaces using React.js.</p>
                </section>

                <section className="section">
                    <h2>Certifications:</h2>
                    <ul>
                        <li>AI - The Complete Guide by Corvit center Rawalpindi</li>
                        <li>React- Web Design by freeCodeCamp</li>
                        <li>JavaScript Algorithms and Data Structures by freeCodeCamp</li>
                    </ul>
                </section>

                <section className="section">
                    <h2>Additional  Inforamation:</h2>
                    <p>Interest: Problem-soving, learn computer's languages( become an expert in computer field)</p>
                    <p>Languages: Urdu(writing and  speaking), Brushishki(writing and speaking), Shina(speaking), English(writing and speaking).</p>
                </section>
                <section className="section">
                    <h2>References:</h2>
                    <p>Available upon request</p>
                </section>
            </div></div>
    );
}

export default Resume;
