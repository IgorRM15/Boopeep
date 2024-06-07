import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import '../Css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#fff" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#fff" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
