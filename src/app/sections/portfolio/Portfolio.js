import React from "react";
import "./Portfolio.scss";
import findTheHat from "../../../images/portfolio-images/findthehat.jpg";
import sennelier from "../../../images/portfolio-images/sennelier.jpg";
import taskify from "../../../images/portfolio-images/taskify.jpg";
import weather from "../../../images/portfolio-images/weather.jpg";
import website from "../../../images/portfolio-images/website.jpg";
import Flickity from "react-flickity-component";

export const Portfolio = () => {
  const flickityOptions = {
    initialIndex: 0,
  };

  const portfolioItems = [
    {
      title: "taskify",
      image: taskify,
      description:
        "Create a web application using react which allows users to fill in a short form to display their tasks. A user starts off by creating a category to organise and group their tasks. After creating a category the user can then start adding their tasks, each task can then be marked as complete, editted or deleted.",
      technologies: [
        "HTML",
        "CSS",
        "Javascrpt",
        "React",
        "Redux Toolkit",
        "Jest",
        "React Router",
      ],
      github: "https://github.com/Jason-Smith-Code/taskify",
    },
    {
      title: "Taskify",
      image: taskify,
      description:
        "Create a web application using react which allows users to fill in a short form to display their tasks. A user starts off by creating a category to organise and group their tasks. After creating a category the user can then start adding their tasks, each task can then be marked as complete, editted or deleted.",
      technologies: [
        "HTML",
        "CSS",
        "Javascrpt",
        "React",
        "Redux Toolkit",
        "Jest",
        "React Router",
      ],
      github: "https://github.com/Jason-Smith-Code/taskify",
    },
  ];

  function Carousel() {
    return (
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className="carousel-cell" id="slide1">
          <div>
            <div className="projectImage">
              <img src={taskify} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Taskify</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              Create a web application using react which allows users to fill in
              a short form to display their tasks. A user starts off by creating
              a category to organise and group their tasks. After creating a
              category the user can then start adding their tasks, each task can
              then be marked as complete, editted or deleted.
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">
              HTML &#183; CSS &#183; Javascript &#183; React &#183; Redux
              Toolkit &#183; Jest &#183; React Router
            </p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/taskify"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </div>
          </div>
        </div>

        <div className="carousel-cell" id="slide2">
          <div>
            <div className="projectImage">
              <img src={website} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Portfolio Website</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              Provide an optimised, well presented, easy to navigate website
              which contains direct links to my portfolio projects in Github.
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">
              HTML &#183; CSS &#183; Javascript
            </p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/portfolio-website"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </div>
          </div>
        </div>

        <div className="carousel-cell" id="slide3">
          <div>
            <div className="projectImage">
              <img src={weather} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Open Weather App</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              A web application allowing users to perform a search to find out
              the current weather at that location
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">
              HTML &#183; CSS &#183; Javascript &#183; React &#183;
              Redux-Toolkit
            </p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/open-weather/"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </div>
          </div>
        </div>

        <div className="carousel-cell" id="slide4">
          <div>
            <div className="projectImage">
              <img src={findTheHat} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Find the Hat</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              To create a node application which allows users to play a simple
              game in the terminal
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">Javascript &#183; Node</p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/find-your-hat"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </div>
          </div>
        </div>

        <div className="carousel-cell" id="slide5">
          <div>
            <div className="projectImage">
              <img src={sennelier} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Sennelier Web Page</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              Learn about CSS Grid, improve the appearance of an existing web
              page.
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">HTML, CSS, Javascript</p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/sennelier-abstract-paint"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </div>
          </div>
        </div>
      </Flickity>
    );
  }

  return <section id="featured">{Carousel()}</section>;
};
