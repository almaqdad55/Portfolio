import React from "react";
import bankApp from "../assests/bank-application.png";
import funWeather from "../assests/fun-weather.png";
import mapty from "../assests/mapty.png";
import barber from "../assests/barber.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    // <div className="portfolio-wrapper">
    //   <div className="container">
    //     <h1 className="text-uppercase text-center py-5">portfolio</h1>
    //     {/*  */}
    //     <div className="img-box-wrapper row justify-content-center">
    //       {/*  */}
    //       <div className=" portfolio-image-box ">
    //         <img
    //           src={bankApp}
    //           alt="Bank Application"
    //           className="portfolio-image"
    //         />
    //         <div className="overflow"></div>
    //       </div>
    //       {/*  */}
    //       <div className=" portfolio-image-box">
    //         <img
    //           src={funWeather}
    //           alt="Weather App"
    //           className="portfolio-image"
    //         />
    //         <div className="overflow"></div>
    //       </div>
    //       {/*  */}
    //       <div className=" portfolio-image-box ">
    //         <img
    //           src={mapty}
    //           alt="Mapty-Track App"
    //           className="portfolio-image "
    //         />
    //         <div className="overflow"></div>
    //       </div>
    //       {/*  */}
    //       <div className="  portfolio-image-box ">
    //         <img
    //           src={barber}
    //           alt="Alexanders Shop"
    //           className="portfolio-image"
    //         />
    //         <div className="overflow"></div>
    //       </div>
    //       {/*  */}
    //     </div>
    //     {/*  */}
    //   </div>
    // </div>
    <div class="team-grid">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Team </h2>
          <p class="text-center">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
            Vestibulum nibh erat, pellentesque ut laoreet. {" "}
          </p>
        </div>
        <div class="row people">
          <div class="col-md-4 col-lg-3 item">
            {/* <div class="box" style="background-image:url(assets/img/1.jpg)"> */}
            <div class="box" style={{ backgroundImage: `url(${bankApp})` }}>
              <div class="cover">
                <h3 class="name ">
                  <a href="#">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faLink}
                      size="2x"
                      color="white"
                    />
                  </a>
                </h3>
                {/* <p class="title">Musician</p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 item">
            {/* <div class="box" style="background-image:url(assets/img/2.jpg)"> */}
            <div class="box" style={{ backgroundImage: `url(${funWeather})` }}>
              <div class="cover">
                <h3 class="name">
                  <a href="#">Felicia Adams</a>
                </h3>
                {/* <p class="title">Artist </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 item">
            {/* <div class="box" style="background-image:url(assets/img/3.jpg)"> */}
            <div class="box" style={{ backgroundImage: `url(${mapty})` }}>
              <div class="cover">
                <h3 class="name">
                  <a href="#">Felicia Adams</a>
                </h3>
                {/* <p class="title">Stylist </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 item">
            {/* <div class="box" style="background-image:url(assets/img/4.jpg)"> */}
            <div class="box" style={{ backgroundImage: `url(${barber})` }}>
              <div class="cover">
                <h3 class="name">
                  <a href="#">Felicia Adams</a>
                </h3>
                {/* <p class="title">Model </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
