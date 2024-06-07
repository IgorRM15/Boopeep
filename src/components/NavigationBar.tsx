import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavigationBar.css';
import sheepLogo from '../assets/sheep-logo.png';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">Sobre</Link>
      </div>
      <Link to="/" className="nav-logo">
        <img src={sheepLogo} alt="Bo Peep Logo" className="logo" />
      </Link>
    </nav>
  );
};

export default NavigationBar;
