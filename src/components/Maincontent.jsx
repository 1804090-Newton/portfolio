import React from 'react';
import { Link } from 'react-router-dom';
const Bread = () => {
  const toggleAbout = () => {
    
  };

  return (
    <div className="bread">
      <div className="main-content">
        <h1>Hi, I'm Newton</h1>
        <h4>I design and build things</h4>
        <br/><br/><br/><br/><br/><br/><br/> 
       
        <Link to="/about" onClick={toggleAbout}><i className="fa-solid fa-angles-down"></i></Link>

        
      </div>
    </div>
  );
};

export default Bread;
