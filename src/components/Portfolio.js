import React from "react";
import bankApp from "../assests/bank-application.png";
import funWeather from "../assests/fun-weather.png";
import mapty from "../assests/mapty.png";
import barber from "../assests/barber.png";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="img-box-wrapper row justify-content-center">
          <img src={bankApp} alt="Bank App" className="portfolio-image" />
        </div>
        {/*  */}
        <div className="img-box-wrapper row justify-content-center">
          <img src={funWeather} alt="Weather App" className="portfolio-image" />
        </div>
        {/*  */}
        <div className="img-box-wrapper row justify-content-center">
          <img src={mapty} alt="Map App" className="portfolio-image" />
        </div>
        {/*  */}
        <div className="img-box-wrapper row justify-content-center">
          <img src={barber} alt="Alexanders Shop" className="portfolio-image" />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Portfolio;
