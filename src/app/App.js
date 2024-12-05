import React from "react";
import { Header } from "./sections/header/Header";
import { About } from "./sections/about/About";
import { Experience } from "./sections/experience/Experience";
import { Intro } from "./sections/intro/Intro";
import { Portfolio } from "./sections/portfolio/Portfolio";
import { Footer } from "./sections/footer/Footer";
import { TimeLine } from "./sections/timeline/TimeLine";
import Skills from "./sections/skills/Skills";
import "./App.scss";

const App = () => {
  return (
      <>
        <Header />
        <a id="intro"></a>
        <Intro />
        <a id="skills"></a>
        <Skills />
        <a id="about"></a>
        <About />
        <a id="history"></a>
        <TimeLine />
        <a id="experience"></a>
        <Experience />
        <a id="portfolio"></a>
        <Portfolio />
        <Footer />
      </>
  );
};

export default App;
