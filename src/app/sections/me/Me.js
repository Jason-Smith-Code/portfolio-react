import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Me.scss";
import PhotoOfMe from "../../../images/mono-me-min.jpg";

export const Me = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px"); // Trigger as soon as the element becomes visiblenpm
  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  return (
    <section>
      <div ref={ref} className="hidden">
        <img id="image-me" src={PhotoOfMe} alt="a photo of me"></img>
      </div>
    </section>
  );
};
