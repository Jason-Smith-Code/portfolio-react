import React, { useState } from "react";
import { Header } from "./sections/header/Header";
import { About } from "./sections/about/About";
import { Experience } from "./sections/experience/Experience";
import { Intro } from "./sections/intro/Intro";
import { Journey } from "./sections/journey/Journey";
import { Me } from "./sections/me/Me";
import { Portfolio } from "./sections/portfolio/Portfolio";
import { Stats } from "./sections/stats/Stats";
import { Footer } from "./sections/footer/Footer";
import { JsAnimation } from "./sections/jsAnimation/JsAnimation";
import "./App.scss";

const App = () => {
  const [animationPlayed, setAnimationPlayed] = useState("false");

  const sendDataToParent = (value) => {
    // the callback. Use a better name
    setAnimationPlayed(value);
  };

  return (
    <>
      {animationPlayed === true ? (
        <>
          <Header />
          <a id="intro"></a>
          <Intro />
          <a id="me"></a>
          <Me />
          <a id="stats"></a>
          <Stats />
          <a id="about"></a>
          <About />
          <a id="journey"></a>
          <Journey />
          <a id="experience"></a>
          <Experience />
          <a id="portfolio"></a>
          <Portfolio />
          <Footer />
        </>
      ) : (
        <JsAnimation sendDataToParent={sendDataToParent} />
      )}
    </>
  );
};

export default App;
