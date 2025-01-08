import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Stats.scss";

export const Stats = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px");

  // identify elements
  class Stat {
    constructor(name, statClass, max, element) {
      this.name = name;
      this.statClass = statClass;
      this.max = max;
      this.counter = 0;
      this.element = element;
    }
  }

  // ! I shouldn't be using document.getElement
  // Tried to work with useRef with no luck

  const skills = [];
  const css = new Stat(
    "CSS",
    "css",
    18,
    document.getElementsByClassName("css")
  );
  const html = new Stat(
    "HTML",
    "html",
    18,
    document.getElementsByClassName("html")
  );
  const javascript = new Stat(
    "Javascript",
    "javascript",
    16,
    document.getElementsByClassName("javascript")
  );
  const react = new Stat(
    "React",
    "react",
    15,
    document.getElementsByClassName("react")
  );
  const redux = new Stat(
    "Redux",
    "redux",
    12,
    document.getElementsByClassName("redux")
  );
  const node = new Stat(
    "Node",
    "node",
    8,
    document.getElementsByClassName("node")
  );
  const git = new Stat("Git", "git", 9, document.getElementsByClassName("git"));
  const jest = new Stat(
    "Jest",
    "jest",
    10,
    document.getElementsByClassName("jest")
  );
  const vsCode = new Stat(
    "VSCode",
    "vscode",
    14,
    document.getElementsByClassName("vscode")
  );
  const github = new Stat(
    "Github",
    "github",
    16,
    document.getElementsByClassName("github")
  );
  const photoshop = new Stat(
    "Photoshop",
    "photoshop",
    16,
    document.getElementsByClassName("photoshop")
  );
  const jsx = new Stat(
    "JSX",
    "jsx",
    18,
    document.getElementsByClassName("jsx")
  );
  const reactRouter = new Stat(
    "React Router",
    "react-router",
    12,
    document.getElementsByClassName("react-router")
  );
  const rtl = new Stat(
    "React TL",
    "react-tl",
    8,
    document.getElementsByClassName("react-tl")
  );
  const responsive = new Stat(
    "Responsive Design",
    "responsive",
    18,
    document.getElementsByClassName("responsive")
  );
  const scss = new Stat(
    "SCSS",
    "scss",
    14,
    document.getElementsByClassName("scss")
  );
  const mongoDb = new Stat(
    "MongoDb",
    "mongo-db",
    6,
    document.getElementsByClassName("mongo-db")
  );
  const npm = new Stat("npm", "npm", 8, document.getElementsByClassName("npm"));
  // push those skills into the skills array
  skills.push(
    html,
    css,
    javascript,
    jsx,
    react,
    redux,
    node,
    jest,
    rtl,
    reactRouter,
    vsCode,
    github,
    git,
    photoshop,
    responsive,
    scss,
    mongoDb,
    npm
  );

  if (inViewport) {
    skills.map((skill) => {
      var interval = setInterval(function () {
        skill.element[skill.counter].style.opacity = "1";
        skill.counter++;
        if (skill.counter === skill.max) {
          clearInterval(interval);
        }
      }, 100);
    });
  }

  function createStatRows() {
    const mappedSkills = skills.map((skill) => {
      return (
        <div key={skill.name} className="stat-row">
          <span className="stats-description">{skill.name}:</span>
          <span>[&nbsp;</span>
          <span ref={ref} className={`${skill.statClass} dark`}>
            |
          </span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span className={`${skill.statClass} dark`}>|</span>
          <span>&nbsp;]</span>
        </div>
      );
    });
    return mappedSkills;
  }

  return (
    <section>
      <div id="statContainer" className="center-container center">
        <h2 className="headline">My Stats</h2>
        <p className="margin-bottom white-text">
          These stats are an indication of my confidence.
        </p>
        {createStatRows()}
      </div>
    </section>
  );
};
