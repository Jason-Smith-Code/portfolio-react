import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Experience.scss";

export const Experience = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "100px"); // Trigger as soon as the element becomes visiblenpm

  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }
  return (
    <section id="experience">
      <div ref={ref} className="text-block center-container hidden">
        <h2 className="headline">Experience</h2>
        <p className="text">
          <span className="white-text">
            3 Years commercal experience working as a web designer
          </span>{" "}
          mainly using Html, CSS and some Javascript.
          <span className="white-text">
            1 Year experience working with Javascript and React
          </span>{" "}
          during my front-end code academy course. I feel I'm at a stage where I
          am ready to enter a junior role. I hope some of the projects I've
          built are of interest. You can{" "}
          <span className="white-text">check my projects out below</span>, they
          include a link to the project github repository. You can also find a
          link to my linkedin profile at the bottom of the page.
        </p>
      </div>
    </section>
  );
};
