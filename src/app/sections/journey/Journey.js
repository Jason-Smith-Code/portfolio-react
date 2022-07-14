import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Journey.scss";

export const Journey = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px");

  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  return (
    <section>
      <div ref={ref} className="text-block center-container hidden">
        <h2 className="headline">Journey</h2>
        <p className="text">
          I'm self taught, I've gained knowledge from several sources at
          different stages of my learning. In the beginning, I found{" "}
          <a className="textLink" href="https://www.udemy.com/">
            Udemy
          </a>{" "}
          and decided to pick a course attempting to learn C#, came across some
          good courses, and some bad ones too. Youtube is a great place to find
          tutorials, but not all of my learning came from watching video's. For
          books I use{" "}
          <a className="textLink" href="https://www.packtpub.com/">
            www.packt.com
          </a>
          , which is an online book store specialising in code and technology.
          Eventually I found{" "}
          <a className="textLink" href="https://www.codecademy.com/">
            Code Academy
          </a>{" "}
          which turned out to be a fantastic resource for learning. I've found
          that the most effective form of learning for me, is get hands on with
          code, to set projects for myself covering something I haven't done
          before.
        </p>
      </div>
    </section>
  );
};
