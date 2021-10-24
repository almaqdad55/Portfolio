import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> Magill, Adelaide, South Australia</p>
            </div>
            <div className="d-flex">
              <a href="tel: 0481786595">0481786595</a>
            </div>
            <div className="d-flex">
              <p>almaqdad55@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex hustify-content-center">
              <a
                href="https://www.linkedin.com/in/malikkamal-7828451b6/"
                className="mx-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/almaqdad55" className="mx-3">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
          <p className="mx-auto">
            Copyright&copy;
            {new Date().getFullYear()}&nbsp;Malik Kamal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
