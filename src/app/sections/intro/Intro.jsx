import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import PhotoOfMe from "../../../images/me.jpg";
import "./Intro.scss";

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
          <p className="preHeading">I love design and code</p>
          <h2 className="headline white-text">React developer</h2>
          <p>
            Highly passionate about coding, exceptionally skilled in design. 
            Constantly seeking to enhance my skills and expand my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};
