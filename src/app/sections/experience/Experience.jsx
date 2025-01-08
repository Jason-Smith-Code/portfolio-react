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
        I have 2 years of commercial experience as a UI Developer at Accenture, where the majority of my work focused on a complex government React project. I played a key role in refactoring the codebase to enhance its performance and maintainability, reducing code duplication, and complexity to improve delivery speed. During this project, I learned TypeScript and focused heavily on reducing vulnerabilities by implementing security best practices. I was also responsible for upgrading Node.js and dependency packages, ensuring the project was always up to date with the latest versions. I delivered a significant number of epics and user stories, helping to drive the project forward while maintaining strong communication with a large team of front end and back end developers aswell as testers, business analysts and UX designers.
        <br/><br/>
        In addition to the core development work, I wrote unit tests with Jest, and contributed heavily to Cypress and Cucumber test suites for end-to-end testing. I also created documentation for new joiners, ensuring smooth onboarding and helping the team scale efficiently.
        <br/><br/>
        Alongside the government project, I worked on a React-based charity project, where I served as a Team Lead for a smaller initiative. I also evaluated client data, translating it into clear application flow diagrams, and ran show-and-tell sessions to keep the client engaged and aligned with the development progress. I mentored junior developers, helping them improve their skills and gain confidence.
        <br/><br/>
        Before transitioning into development, I spent 3 years working as a Web Designer, where my background in art and graphic design heavily influenced my front-end development skills, particularly in UI/UX design. The projects in my portfolio reflect my growth as a developer, and I am continually expanding it to include more advanced work. You can find links to my projects on GitHub below, as well as a link to my LinkedIn profile for more details.
        </p>
      </div>
    </section>
  );
};
