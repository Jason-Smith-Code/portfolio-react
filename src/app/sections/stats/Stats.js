import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./Stats.scss";

export const Stats = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px");

  if (inViewport) {
    const cssElements = document.getElementsByClassName("css");
    const htmlElements = document.getElementsByClassName("html");
    const javascriptElements = document.getElementsByClassName("javascript");
    const reactElements = document.getElementsByClassName("react");
    const reduxToolkitElements =
      document.getElementsByClassName("redux-toolkit");
    const nodeElements = document.getElementsByClassName("node");
    const gitElements = document.getElementsByClassName("git");
    const jestElements = document.getElementsByClassName("jest");
    const photoshopElements = document.getElementsByClassName("photoshop");
    const responsiveElements = document.getElementsByClassName("responsive");
    const vscodeElements = document.getElementsByClassName("vscode");
    const githubElements = document.getElementsByClassName("github");

    let cssStatMax = 15;
    var cssCounter = 0;
    var cssInterval = setInterval(function () {
      cssElements[cssCounter].style.opacity = "1";
      cssCounter++;
      if (cssCounter === cssStatMax) {
        clearInterval(cssInterval);
      }
    }, 100);

    let htmlStatMax = 14;
    var htmlCounter = 0;
    var htmlInterval = setInterval(function () {
      htmlElements[htmlCounter].style.opacity = "1";
      htmlCounter++;
      if (htmlCounter === htmlStatMax) {
        clearInterval(htmlInterval);
      }
    }, 100);

    let javascriptStatMax = 12;
    var javascriptCounter = 0;
    var javascriptInterval = setInterval(function () {
      javascriptElements[javascriptCounter].style.opacity = "1";
      javascriptCounter++;
      if (javascriptCounter === javascriptStatMax) {
        clearInterval(javascriptInterval);
      }
    }, 100);

    let reactStatMax = 11;
    var reactCounter = 0;
    var reactInterval = setInterval(function () {
      reactElements[reactCounter].style.opacity = "1";
      reactCounter++;
      if (reactCounter === reactStatMax) {
        clearInterval(reactInterval);
      }
    }, 100);

    let reduxToolkitStatMax = 9;
    var reduxToolkitCounter = 0;
    var reduxToolkitInterval = setInterval(function () {
      reduxToolkitElements[reduxToolkitCounter].style.opacity = "1";
      reduxToolkitCounter++;
      if (reduxToolkitCounter === reduxToolkitStatMax) {
        clearInterval(reduxToolkitInterval);
      }
    }, 100);

    let nodeStatMax = 4;
    var nodeCounter = 0;
    var nodeInterval = setInterval(function () {
      nodeElements[nodeCounter].style.opacity = "1";
      nodeCounter++;
      if (nodeCounter === nodeStatMax) {
        clearInterval(nodeInterval);
      }
    }, 100);

    let gitStatMax = 10;
    var gitCounter = 0;
    var gitInterval = setInterval(function () {
      gitElements[gitCounter].style.opacity = "1";
      gitCounter++;
      if (gitCounter === gitStatMax) {
        clearInterval(gitInterval);
      }
    }, 100);

    let jestStatMax = 8;
    var jestCounter = 0;
    var jestInterval = setInterval(function () {
      jestElements[jestCounter].style.opacity = "1";
      jestCounter++;
      if (jestCounter === jestStatMax) {
        clearInterval(jestInterval);
      }
    }, 100);

    let photoshopStatMax = 12;
    var photoshopCounter = 0;
    var photoshopInterval = setInterval(function () {
      photoshopElements[photoshopCounter].style.opacity = "1";
      photoshopCounter++;
      if (photoshopCounter === photoshopStatMax) {
        clearInterval(photoshopInterval);
      }
    }, 100);

    let responsiveStatMax = 16;
    var responsiveCounter = 0;
    var responsiveInterval = setInterval(function () {
      responsiveElements[responsiveCounter].style.opacity = "1";
      responsiveCounter++;
      if (responsiveCounter === responsiveStatMax) {
        clearInterval(responsiveInterval);
      }
    }, 100);

    let vscodeStatMax = 14;
    var vscodeCounter = 0;
    var vscodeInterval = setInterval(function () {
      vscodeElements[vscodeCounter].style.opacity = "1";
      vscodeCounter++;
      if (vscodeCounter === vscodeStatMax) {
        clearInterval(vscodeInterval);
      }
    }, 100);
    let githubStatMax = 10;
    var githubCounter = 0;
    var githubInterval = setInterval(function () {
      githubElements[githubCounter].style.opacity = "1";
      githubCounter++;
      if (githubCounter === githubStatMax) {
        clearInterval(githubInterval);
      }
    }, 100);
  }

  return (
    <section>
      <div id="statContainer" className="centerContainer center">
        <h2 className="headline">My Stats</h2>
        <div className="statRow">
          <span className="statsDescription">Visual Studio Code</span>
          <span>[&nbsp;</span>
          <span ref={ref} className="vscode dark ">
            |
          </span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span className="vscode dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Github</span>
          <span>[&nbsp;</span>
          <span ref={ref} className="github dark ">
            |
          </span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span className="github dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Photoshop CS6</span>
          <span>[&nbsp;</span>
          <span ref={ref} className="photoshop dark ">
            |
          </span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span className="photoshop dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Responsive Design:</span>
          <span>[&nbsp;</span>
          <span ref={ref} className="responsive dark ">
            |
          </span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span className="responsive dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">HTML:</span>
          <span>[&nbsp;</span>
          <span ref={ref} className="html dark ">
            |
          </span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span className="html dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">CSS:</span>
          <span>[&nbsp;</span>
          <span className="css dark">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span className="css dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Javascript:</span>
          <span>[&nbsp;</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span className="javascript dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">React:</span>
          <span>[&nbsp;</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span className="react dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Redux Toolkit:</span>
          <span>[&nbsp;</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span className="redux-toolkit dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Node:</span>
          <span>[&nbsp;</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span className="node dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Git:</span>
          <span>[&nbsp;</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span className="git dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <div className="statRow">
          <span className="statsDescription">Jest:</span>
          <span>[&nbsp;</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span className="jest dark ">|</span>
          <span>&nbsp;]</span>
        </div>
        <p className="stat-text">
          These stats are an indication of my confidence in each language or
          library
        </p>
      </div>
    </section>
  );
};
