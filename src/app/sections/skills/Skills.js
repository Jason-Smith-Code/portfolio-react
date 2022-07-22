import React, { useEffect, useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Skills.scss";
// import SVGs
import photoshop from "../../../assets/photoshop.svg";
import visualStudio from "../../../assets/visualStudio.svg";
import mongoDb from "../../../assets/mongoDb.svg";
import reactRouter from "../../../assets/reactRouter.svg";
import w3c from "../../../assets/w3c.svg";
import redux from "../../../assets/redux.svg";
import jsx from "../../../assets/jsx.svg";
import html5 from "../../../assets/html5.svg";
import css3 from "../../../assets/css3.svg";
import javascript from "../../../assets/javascript.svg";
import react from "../../../assets/react.svg";
import node from "../../../assets/node.svg";
import jest from "../../../assets/jest.svg";
import test from "../../../assets/test.svg";
import figma from "../../../assets/figma.svg";
import git from "../../../assets/git.svg";
import github from "../../../assets/github.svg";
import npm from "../../../assets/npm.svg";
import responsive from "../../../assets/responsive.svg";

// Animate thes stats into view
const Skills = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "100px"); // Trigger as soon as the element becomes visible

  useEffect(() => {}, []);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  if (inViewport) {
    var items = $(".grid-item");
    const loop = async () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("hidden");
        items[i].classList.add("fade-in-element");
        await wait(100);
      }
    };
    loop();
  }

  function Skill(title, icon) {
    this.title = title;
    this.icon = icon;
  }
  const skills = [];

  const htmlElement = new Skill("HTML5", html5);
  const cssElement = new Skill("CSS3 / SCSS", css3);
  const javascriptElement = new Skill("Javascript", javascript);
  const jsxElement = new Skill("JSX", jsx);
  const reactElement = new Skill("React", react);
  const nodeElement = new Skill("Node", node);
  const reduxElement = new Skill("Redux", redux);
  const jestElement = new Skill("Jest", jest);
  const rtlElement = new Skill("React Testing Library", test);
  const reactRouterElement = new Skill("React Router", reactRouter);
  const vsCodeElement = new Skill("Visual Studio Code", visualStudio);
  const photoshopElement = new Skill("Photoshop CS6", photoshop);
  const figmaElement = new Skill("Figma", figma);
  const gitElement = new Skill("Git", git);
  const githubElement = new Skill("Github", github);
  const npmElement = new Skill("npm", npm);
  const mongoDbElement = new Skill("MongoDb", mongoDb);
  const responsiveElement = new Skill("Responsive Design", responsive);
  const accessibilityElement = new Skill("Accessibility", w3c);

  skills.push(
    htmlElement,
    cssElement,
    javascriptElement,
    jsxElement,
    reactElement,
    nodeElement,
    reduxElement,
    jestElement,
    rtlElement,
    reactRouterElement,
    vsCodeElement,
    photoshopElement,
    figmaElement,
    gitElement,
    githubElement,
    npmElement,
    mongoDbElement,
    responsiveElement,
    accessibilityElement
  );

  // const inViewport = useIntersection(refs, "100px");

  function createSkills() {
    const mappedSkills = skills.map((skill, index) => {
      return (
        <div key={index} className="grid-item hidden">
          <img
            src={skill.icon}
            alt={skill.title}
            width="100px"
            height="auto"
            className="skill-icon"
          ></img>
          <p>{skill.title}</p>
        </div>
      );
    });
    return mappedSkills;
  }

  return (
    <section id="skills">
      <h2 className="headline">Skills</h2>
      <div ref={ref} id="skills-grid">
        {createSkills()}
      </div>
    </section>
  );
};

export default Skills;
