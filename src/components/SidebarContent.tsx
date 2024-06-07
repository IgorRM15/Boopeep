import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/SidebarContent.css';
import { CiMenuBurger } from "react-icons/ci";

const SidebarContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(setIsOpen => !setIsOpen)
  }

  const navigate = useNavigate();

  const closeSidebar = () => {
    document.body.classList.remove('sidebar-open');
    navigate('/');
  };

  const handleLinkClick = (path: string) => {
    document.body.classList.remove('sidebar-open');
    navigate(path);
  };

  return (
    <>
    {isOpen == true ? (
    <div className="sidebar">
      <button className="close-button" onClick={handleOpen}>×</button>
      <div className="menu-container">
        <a onClick={() => handleLinkClick('/')}>Home</a>
        <a onClick={() => handleLinkClick('/about')}>Sobre</a>
      </div>
    </div>
    ) : (
      <div>
        <button onClick={handleOpen}><CiMenuBurger className='menu-btn'/></button>
      </div>
    )}
    </>
  );
};

export default SidebarContent;
