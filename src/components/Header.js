import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Web development and web promo</h1>
        <Typed
          className="typed-text"
          strings={["Web designs", "Web Developement", "Front-end Developer"]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
