import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import '../Css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://github.com/IgorRM15" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="social-icon" />
        </a>
        <a href="https://instagram.com/codetatio" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
