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
    <section>
      <div ref={ref} className="text-block centerContainer hidden">
        <h2 className="headline">Experience</h2>
        <p className="text">
          I'm at the beginning of changing my career which means I have no
          experience working as a developer in a professional capacity, I'm at a
          stage where I am ready to enter my first role and what experience I do
          have has been gained through learning, and building my portfolio. I
          hope some of the projects I've built interest you and I would
          certainly love some feedback. You can check my projects out below, and
          find a link to the project github repository of each project. You can
          also find a link to my linkedin profile at the bottom of the page.
        </p>
      </div>
    </section>
  );
};
