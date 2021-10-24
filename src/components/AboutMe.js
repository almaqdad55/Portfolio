import React from "react";
import myPhoto from "../assests/about-me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={myPhoto} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Ambitious Freelance Web Developer, primarily using JavaScript and
            CSS frameworks. Proficient in an array of scripting languages and
            technologies. Enjoy building projects that solves real world
            problems. Currently seeking a Web developer role where I can
            continue to learn and grow whilst bringing value to the
            organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
