import React from "react";
import "./Footer.scss";
import Logo from "../../../images/logo-100.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";
export const Footer = () => {
  return (
    <footer>
      <div id="footer-section">
        <div className="footer-block">
          <a href="/">
            <img id="footerlogo" src={Logo} alt="logo"></img>
          </a>
        </div>
        <div className="footer-block">
          <h6 className="footer-heading">Download</h6>
          <ul id="verticalMenu">
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>{" "}
              <a
                href="download/cv.pdf"
                target="_blank"
                className="menu-item"
                download="cv.pdf"
              >
                C.V
              </a>
              <span className="rightBracket">]</span>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <h6 className="footer-heading">Navigation</h6>
          <ul id="verticalMenu">
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#intro">
                Intro
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#stats">
                Stats
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#about">
                About
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#journey">
                Journey
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#experience">
                Experience
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#portfolio">
                Portfolio
              </a>
              <span className="rightBracket">]</span>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <h6 className="footer-heading">Links</h6>
          <ul id="verticalMenu">
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="menu-item"
                href="https://www.linkedin.com/in/jason-smith-193674187/"
                target="_blank"
              >
                Linkedin
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a
                className="menu-item"
                href="https://github.com/Jason-Smith-Code/"
                target="_blank"
              >
                github
              </a>
              <span className="rightBracket">]</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="social-icon-container">
        <ul>
          <li className="inlineBlock">
            <a
              href="https://www.linkedin.com/in/jason-smith-193674187/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
          <li className="inlineBlock">
            <a href="https://github.com/Jason-Smith-Code/" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
