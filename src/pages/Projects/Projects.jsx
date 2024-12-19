import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <section className="project-category">
        <h2>AI Projects</h2>
        
        <section className="project">
          <h3>1. AI-Powered Chatbot</h3>
          <p>
            This project involves creating a chatbot using natural language processing techniques. The chatbot can engage users in conversation and learn from interactions over time.
          </p>
          <p>
            <strong>Details:</strong> The chatbot uses Python and libraries like NLTK and TensorFlow. It is integrated with a simple web interface built with React.js, enabling real-time conversations.
          </p>
          <p>
            <strong>Technologies Used:</strong> Python, TensorFlow, NLTK, React.js, HTML, CSS.
          </p>
        </section>

        <section className="project">
          <h3>2. Image Classification with CNN</h3>
          <p>
            Developed a convolutional neural network (CNN) model to classify images from the CIFAR-10 dataset.
          </p>
          <p>
            <strong>Details:</strong> The model achieved high accuracy and was deployed on a Flask backend with a React.js frontend for user interaction.
          </p>
          <p>
            <strong>Technologies Used:</strong> Python, Keras, TensorFlow, Flask, React.js.
          </p>
        </section>

        <section className="project">
          <h3>3. Stock Price Prediction</h3>
          <p>
            Created a predictive model using historical stock prices to forecast future trends.
          </p>
          <p>
            <strong>Details:</strong> The model uses machine learning algorithms like LSTM and is implemented in Python. It features a web interface for user input.
          </p>
          <p>
            <strong>Technologies Used:</strong> Python, scikit-learn, Keras, Flask, React.js.
          </p>
        </section>
      </section>

      <section className="project-category">
        <h2>React.js Projects</h2>
        
        <section className="project">
          <h3>1. Personal Portfolio Website</h3>
          <p>
            A responsive portfolio website showcasing my projects and skills.
          </p>
          <p>
            <strong>Details:</strong> Developed using React.js and CSS3, this website features a clean design and is optimized for both desktop and mobile devices.
          </p>
          <p>
            <strong>Technologies Used:</strong> React.js, HTML5, CSS3, Bootstrap.
          </p>
        </section>

        <section className="project">
          <h3>2. Task Management App</h3>
          <p>
            A web application to manage tasks, allowing users to create, update, and delete tasks.
          </p>
          <p>
            <strong>Details:</strong> This app uses React.js for the frontend and integrates with a Node.js backend for data storage.
          </p>
          <p>
            <strong>Technologies Used:</strong> React.js, Node.js, Express, MongoDB.
          </p>
        </section>

        <section className="project">
          <h3>3. Weather Forecast App</h3>
          <p>
            A simple app that fetches weather data from an API based on user input.
          </p>
          <p>
            <strong>Details:</strong> Built with React.js, this app allows users to search for weather in various locations and displays the results in a user-friendly interface.
          </p>
          <p>
            <strong>Technologies Used:</strong> React.js, OpenWeatherMap API, CSS.
          </p>
        </section>
      </section>

      <section className="project-category">
        <h2>C++ Projects</h2>
        
        <section className="project">
          <h3>1. Mini Banking System</h3>
          <p>
            A command-line application that allows users to manage their bank accounts.
          </p>
          <p>
            <strong>Details:</strong> Built in C++, the system supports account creation, deposits, withdrawals, and balance inquiries, using file storage for data persistence.
          </p>
          <p>
            <strong>Technologies Used:</strong> C++, File Handling, Object-Oriented Programming.
          </p>
        </section>

        <section className="project">
          <h3>2. Student Management System</h3>
          <p>
            A console application for managing student records, including adding, deleting, and viewing student information.
          </p>
          <p>
            <strong>Details:</strong> This project uses classes to define student properties and file handling for data storage.
          </p>
          <p>
            <strong>Technologies Used:</strong> C++, File Handling, Object-Oriented Programming.
          </p>
        </section>

        <section className="project">
          <h3>3. Tic-Tac-Toe Game</h3>
          <p>
            A command-line implementation of the classic Tic-Tac-Toe game.
          </p>
          <p>
            <strong>Details:</strong> The game allows two players to play against each other, with input validation and game status display.
          </p>
          <p>
            <strong>Technologies Used:</strong> C++, Standard Input/Output.
          </p>
        </section>
      </section>
    </div>
  );
};

export default Projects;
