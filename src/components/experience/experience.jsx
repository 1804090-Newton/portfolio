import React from 'react'
import './experience.css';

export default function Experience() {
  return (
    <div id="experience">
    <div>
        <h1> Experience</h1>
    </div>

    <section className="experience-flex">
        <div className="experience-div1">
            <h3>Job title</h3>
            <p> Company Name
                <hr />
                Apr 2018 - Dec 2022</p>

        </div>
        <ul className="experience-ul1">

            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>

        </ul>

        <div className="vl"></div>

    </section>

    <section className="experience-flex">
        <ul className="experience-ul2">

            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit </li>

        </ul>
        <div className="vl2"></div>
        <div className="experience-div2">
            <h3>Job title</h3>
            <p> Company Name
                <hr />
                Apr 2018 - Dec 2022</p>
        </div>

    </section>


</div>
  )
}