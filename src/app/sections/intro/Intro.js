import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
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
    <section>
      <div ref={ref} className="intro-container hidden">
        <div className="left-aligned-text text-block">
          <p className="preHeading">My name is</p>
          <h1 className="headline mainHeading">Jason Smith</h1>
          <h2 className="headline">
            I'm an aspiring{" "}
            <span className="white-text">front-end developer</span>
          </h2>
          <p>
            I'm <span id="myAge">{calculateAge()}</span> years old and I'm a
            super keen coder whose aim is to continue progressing my skills and
            knowedge so that I can become an asset to a team.
          </p>
        </div>
      </div>
    </section>
  );
};
