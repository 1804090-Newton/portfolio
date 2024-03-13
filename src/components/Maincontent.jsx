import React from 'react';

const Bread = () => {
  const toggleAbout = () => {
    
  };

  return (
    <div className="bread">
      <div className="main-content">
        <h1>Hi, I'm Newton</h1>
        <h4>I design and build things</h4>
        <br/><br/><br/><br/><br/><br/><br/> 
        <a href="#about" onClick={toggleAbout}><i className="fa-solid fa-angles-down"></i></a>
      </div>
    </div>
  );
};

export default Bread;
