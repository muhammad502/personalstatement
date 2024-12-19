import React from 'react';
import './Error.css'; // Assuming you create this CSS file
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-illustration">
        {/* You can replace this with an image or SVG of your choice */}
        {/* <img src="https://via.placeholder.com/400" alt="404 Error" /> */}
      </div>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">We’re sorry, but the page you were looking for is no longer available. Please check our homepage.</p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
