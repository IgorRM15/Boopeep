import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/SidebarContent.css';

const SidebarContent: React.FC = () => {
  const navigate = useNavigate();

  const closeSidebar = () => {
    document.body.classList.remove('sidebar-open');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <button className="close-button" onClick={closeSidebar}>×</button>
      <div className="menu-container">
        <Link to="/" onClick={() => document.body.classList.remove('sidebar-open')}>Home</Link>
        <Link to="/about" onClick={() => document.body.classList.remove('sidebar-open')}>Sobre</Link>
      </div>
    </div>
  );
};

export default SidebarContent;
