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
          5 months commercal experience working as a full-stack developer at
          Accenture. 3 Years commercal experience working as a web designer.
          Many years experience working with HTML, CSS, JavaScript as well as
          using many frameworks during the initial learning phase of my career.
          Experience as an artist and graphic designer contributed to my
          frontend skill set. <br />
          <br />I hope some of the projects I've built are of interest. You can
          check my projects out below, they include a link to the project github
          repository. You can also find a link to my linkedin profile at the
          bottom of the page.
        </p>
      </div>
    </section>
  );
};
