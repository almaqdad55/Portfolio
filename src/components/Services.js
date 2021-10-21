import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faSass,
  faHtml5,
  faNodeJs,
  faBootstrap,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faHtml5} size="3x" />
              </div>
              <h3>Web Design</h3>
              <p>
                It is important to understand how HTML affects SEO. Therefore,
                Ray puts a strong emphasis on meta tags, semantic elements, and
                heading placement. He also has an in depth command of CSS3
                properties and how they affect design. He incorporates design
                best practices in color coordination, text selection,
                animations, flex/grid layouts, and responsive images.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="3x" />
              </div>

              <h3>Web Devlopemnt</h3>
              <p>
                Managing CSS3 code can become a complicated affair as project
                design continues to expand. Ray uses Sass to de-clutter and stay
                organized with his CSS3 designs. This also allows his code to be
                modular and reusable.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="3x" />
              </div>
              <h3>React Developer</h3>
              <p>
                JavaScript is the backbone to just about every project Ray works
                on. He is proficient at Vanilla JavaScript and interacting with
                the DOM. This allows Ray to make websites interactive and
                provide powerful user experiences.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faSass} size="3x" />
              </div>
              <h3>React Developer</h3>
              <p>
                JavaScript is the backbone to just about every project Ray works
                on. He is proficient at Vanilla JavaScript and interacting with
                the DOM. This allows Ray to make websites interactive and
                provide powerful user experiences.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Services;
