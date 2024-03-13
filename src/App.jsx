
import React from 'react'
import Header from './components/Header'
import Maincontent from './components/Maincontent'
import About from './components/About'
import Contact from './components/contact/Contact'
import './App.css'
import Experience from './components/experience/experience'
import Project from './components/project/Project'

function App() {
 
  return (
    <>
     
      <Header  className="bar" />
      <Maincontent/>
      <div className='contain'>
      <About/> <br/>
       <Experience/>
       <Project/>   
      <Contact/>
      </div>

    </>
  )
}

export default App
