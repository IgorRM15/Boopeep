import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/"><img src="/src/assets/sheep-logo.png" alt="Bo Peep" width={150} height={40}/></Link>
      <Link to="/download" className="download-button">Download</Link>
    </div>
  );
};

export default NavigationBar;