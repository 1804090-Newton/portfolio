import React from "react";
import "./Project.css";
import githubIcon from "../../assets/icon/github.jpg";
import externalIcon from "../../assets/icon/external.jpg";


export default function FeatureProject() {
  return (
    <div id="feature-project">
      <div>
        <h1>Featured Project</h1>
      </div>
      <section className="feature-project-flex">
        <div style={{ width: "50%" }} className="box"></div>

        <div style={{ width: "50%" }} className="feature-project-text">
          <h3>Project Name</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            architecto debitis expedita, necessitatibus nulla tempore officia
            sed placeat minima earum temporibus magni.
          </p>
          <hr />
          <div >
          <p>HTML  CSS  JSS</p>
          </div>
          <div>
            <img width="25px" style={{ marginRight: "10px" }} src={githubIcon} alt="Github" />
            <a href="#">
              <img
                width="25px"
                height="25px"
                style={{ marginLeft: "10px" }}
                src={externalIcon}
                alt="External"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="feature-project-flex">
        <div style={{ width: "50%" }} className="feature-project-text">
          <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>
            Project Name
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            architecto debitis expedita, necessitatibus nulla tempore officia
            sed placeat minima earum temporibus magni.
          </p>
          <hr />
          <div>
          <p>HTML  CSS  JSS</p>
          </div>
          <div>
            <img width="25px"   style={{ marginRight: "10px" }} src={githubIcon} alt="Github" />
            <a href="#">
              <img
              style={{ marginLeft: "10px" }}
                width="25px"
                height="25px"
                src={externalIcon}
                alt="External"
              />
            </a>
          </div>
        </div>
        <div style={{ width: "50%" }} className="box"></div>
      </section>
    </div>
  );
}