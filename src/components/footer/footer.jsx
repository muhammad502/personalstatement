import React from 'react';
import './footer.css'; // Assuming you create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Muhammad Abbas. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
          
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
