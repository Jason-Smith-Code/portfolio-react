import React, { useState } from "react";
import { Header } from "./sections/header/Header";
import { About } from "./sections/about/About";
import { Experience } from "./sections/experience/Experience";
import { Intro } from "./sections/intro/Intro";
import { Journey } from "./sections/journey/Journey";
import { Portfolio } from "./sections/portfolio/Portfolio";
import { Footer } from "./sections/footer/Footer";
import Skills from "./sections/skills/Skills";
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
          <a id="skills"></a>
          <Skills />
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
