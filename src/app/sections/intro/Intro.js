import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import PhotoOfMe from "../../../images/me.jpg";
import "./Intro.scss";
import { calculateAge } from "../../utility/calculateAge";

export const Intro = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "100px");

  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  return (
    <section id="intro">
      <div ref={ref} className="intro-container hidden">
        <div className="portrait-container">
          <img id="image-me" src={PhotoOfMe} alt="a photo of me"></img>
        </div>
        <div className="intro-text-contanier">
          <p className="preHeading">My name is</p>
          <h1 className="headline mainHeading">Jason Smith</h1>
          <p className="preHeading">I love design and interfaces</p>
          <h2 className="headline white-text">React developer</h2>
          <p>
            I'm <span id="myAge">{calculateAge()}</span> years old, 
            highly passionate about coding, exceptionally skilled in design. 
            Constantly seeking to enhance my skills and expand my knowledge, 
            I can be a valuable asset to your team.
          </p>
        </div>
      </div>
    </section>
  );
};
