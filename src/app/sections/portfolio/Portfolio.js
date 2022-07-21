import React from "react";
import "./Portfolio.scss";
import findTheHat from "../../../images/portfolio-images/findthehat.jpg";
import sennelier from "../../../images/portfolio-images/sennelier.jpg";
import taskify from "../../../images/portfolio-images/taskify.jpg";
import weather from "../../../images/portfolio-images/weather.jpg";
import reddit from "../../../images/portfolio-images/reddit-mini.jpg";
import website from "../../../images/portfolio-images/website.jpg";
import keyboard from "../../../images/portfolio-images/keyboard.jpg";
import ultimateFinish from "../../../images/portfolio-images/ultimate-finish.jpg";

export const Portfolio = () => {
  function PortfolioItem(title, image, description, tags, github) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.tags = tags;
    this.github = github;
  }

  const redditWork = new PortfolioItem(
    "Reddit Mini",
    reddit,
    "Create a miniture read only version of Reddit. Use reddit API to capture JSON data, and render that data in the form of search results. The user can search for posts, subreddits and read comments on each post.",
    "CSS : Javascript : React : Redux Toolkit : Jest",
    "https://github.com/Jason-Smith-Code/reddit-min"
  );

  const taskifyWork = new PortfolioItem(
    "Taskify",
    taskify,
    "Create a web application using react which allows users to fill in a short form to display their tasks. A user starts off by creating a category to organise and group their tasks. After creating a category the user can then start adding their tasks, each task can then be marked as complete, editted or deleted.",
    "HTML : CSS : Javascript : React : Redux Toolkit : Jest : React Router",
    "https://github.com/Jason-Smith-Code/taskify"
  );

  const ultimateFinishWork = new PortfolioItem(
    "Ultimate Finish",
    ultimateFinish,
    "To produce a modern, responsive and optimised website which showcases what the business does. The webste will be easy to navigate, will contain a consistent theme which feels like it belongs to the brand. The goal would be to convert visitors into customers through the display of high quality image assets featuring finished work.",
    "HTML : CSS : Javascript",
    "https://github.com/Jason-Smith-Code/ultimate-finish/"
  );

  const jsTechWebsiteWork = new PortfolioItem(
    "Portfolio Site Version.1",
    website,
    "To produce a modern, responsive and optimised website which showcases what the business does. The webste will be easy to navigate, will contain a consistent theme which feels like it belongs to the brand. The goal would be to convert visitors into customers through the display of high quality image assets featuring finished work.",
    "HTML : CSS : Javascript",
    "https://github.com/Jason-Smith-Code/portfolio-website/"
  );

  const keyboardWork = new PortfolioItem(
    "Virtual Keyboard",
    keyboard,
    "A short project, react web application which allows users to interact with a virtual keyboard, the keyboard is responsive, optimised for all devices, it also responds to onClick events, transfering the corrosponding value to the text area.",
    "HTML : CSS : Javascript : React",
    "https://github.com/Jason-Smith-Code/virtual-keyboard/"
  );

  const openWeatherWork = new PortfolioItem(
    "Open Weather App",
    weather,
    "A web application allowing users to perform a search to find out the current weather at that location.",
    "HTML : CSS : Javascript : React : Redux-Toolkit",
    "https://github.com/Jason-Smith-Code/open-weather/"
  );

  const findTheHatWork = new PortfolioItem(
    "Find Your Hat",
    findTheHat,
    "To create a node application which allows users to play a simple game in the terminal. The user must enter a key to move in one of four directions, traversing a grid to reach the exit.",
    "Javascript : Node",
    "https://github.com/Jason-Smith-Code/find-your-hat/"
  );

  const sennelierWebPageWork = new PortfolioItem(
    "Sennelier Web Page",
    sennelier,
    "Learn about CSS Grid, improve the appearance of an existing web page.",
    "HTML : CSS : Javascript",
    "https://github.com/Jason-Smith-Code/sennelier-abstract-paint/"
  );

  const projects = [];
  projects.push(
    redditWork,
    taskifyWork,
    ultimateFinishWork,
    jsTechWebsiteWork,
    keyboardWork,
    openWeatherWork,
    findTheHatWork,
    sennelierWebPageWork
  );

  function showProjects() {
    const mappedProjects = projects.map((project, index) => {
      return (
        <div key={index} className="project-grid-item">
          <div className="inner-project-container">
            <div>
              <img className="project-image" src={project.image}></img>
              <p className="project-title">{project.title}</p>
              <p className="project-subheading">Project Objective:</p>
              <p className="project-description">{project.description}</p>
              <p className="project-subheading">Technologies Used:</p>
              <p className="project-description">{project.tags}</p>
            </div>
            <div className="git-hub-link-container">
              <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
                <span className="leftBracket">[</span>
                <a
                  className="git-hub-link"
                  href={project.github}
                  target="_blank"
                >
                  github
                </a>
                <span className="rightBracket">]</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return mappedProjects;
  }

  return (
    <section id="portfolio">
      <h2 className="portfolio-headline">Portfolio</h2>
      <div id="project-grid">{showProjects()}</div>
    </section>
  );
};
