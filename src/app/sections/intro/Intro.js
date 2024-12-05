import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import PhotoOfMe from "../../../images/me2.jpg";
import "./Intro.scss";

export const Intro = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "100px");

  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  function calculateAge() {
    /* CALCULATE BIRTHDAY */
    const birthday = new Date("02/20/1984");
    const today = new Date();
    const diffInMs = Math.abs(today - birthday);
    var result = parseInt(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return result;
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
            I'm <span id="myAge">{calculateAge()}</span> old, 
            highly passionate about coding, 
            and exceptionally skilled in design. 
            I'm constantly seeking to enhance my skills and expand my knowledge, 
            and I believe I can be a valuable asset to your team.
          </p>
        </div>
      </div>
    </section>
  );
};
