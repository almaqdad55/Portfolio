import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
//Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Particles from "react-particles-js";

const App = () => {
  return (
    <React.Fragment>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <AboutMe />
    </React.Fragment>
  );
};

export default App;
