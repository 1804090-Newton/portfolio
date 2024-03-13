import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faBars } from '@fortawesome/free-solid-svg-icons';
import log from '../assets/icon/Nicon.jpg';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="bar">
      <img src={log} alt="Logo" className="logo" />
      
      
      <FontAwesomeIcon icon={faBars} className="bars-icon" onClick={toggleNavbar} />
      
     
      <nav className={`nav-links ${showNavbar ? 'show' : ''}`}>
        <ul>
          <li><a href="#about" className="nav-item">about</a></li>
          <li><a href="#experience" className="nav-item">experience</a></li>
          <li><a href="#feature-project" className="nav-item">project</a></li> 
          <li><a href="#contact" className="nav-item">contact</a></li>
        </ul>
      </nav>
      
      
      <span className="resume-button">
        <a className="btn1" href="#"><button>Resume</button></a>
        <a className="btn2" href="#"><button>Hire Me</button></a>
      </span>
    </header>
  );
};

export default Header;
