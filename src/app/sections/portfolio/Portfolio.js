import React from "react";
import "./Portfolio.scss";
import findTheHat from "../../../images/portfolio-images/findthehat.jpg";
import sennelier from "../../../images/portfolio-images/sennelier.jpg";
import taskify from "../../../images/portfolio-images/taskify.jpg";
import weather from "../../../images/portfolio-images/weather.jpg";
import website from "../../../images/portfolio-images/website.jpg";
import keyboard from "../../../images/portfolio-images/keyboard.jpg";
import ultimateFinish from "../../../images/portfolio-images/ultimate-finish.jpg";
import Flickity from "react-flickity-component";

export const Portfolio = () => {
  const flickityOptions = {
    initialIndex: 0,
  };

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
              <img src={ultimateFinish} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Ultimate Finish</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              To produce a modern, responsive and optimised website which
              showcases what the business does. The webste will be easy to
              navigate, will contain a consistent theme which feels like it
              belongs to the brand. The goal would be to convert visitors into
              customers through the display of high quality image assets
              featuring finished work.
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
                href="https://github.com/Jason-Smith-Code/ultimate-finish/"
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
              <img src={website} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Portfolio Website Html</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              My task here is to represent myself with a responsive, optimised
              and easy to navigate website. It also must be very well presented,
              show casing my graphic design skills. It will contain direct links
              to all my portfolio projects hosted on Github.
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

        <div className="carousel-cell" id="slide4">
          <div>
            <div className="projectImage">
              <img src={keyboard} className="portfolioImage"></img>
            </div>
            <p className="featureProjectTitle">Virtual Keyboard</p>
            <p className="featureProjectSubTitle">Project objective:</p>
            <p className="featureProjectDescription">
              A short project, react web application which allows users to
              interact with a virtual keyboard, the keyboard is responsive,
              optimised for all devices, it also responds to onClick events,
              transfering the corrosponding value to the text area.
            </p>
            <p className="featureProjectSubTitle">Technologies used:</p>
            <p className="featureProjectDescription">
              HTML &#183; CSS &#183; Javascript &#183; React
            </p>
          </div>
          <div className="git-hub-link-container">
            <div className="gitProjectLinkContainer menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="git-hub-link"
                href="https://github.com/Jason-Smith-Code/virtual-keyboard/"
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

        <div className="carousel-cell" id="slide6">
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

        <div className="carousel-cell" id="slide7">
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
