import React from "react";
import "./Footer.scss";
import Logo from "../../../images/logo-100.png";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";

export const Footer = () => {
  return (
    <footer>
      <div id="footer-section">
        <div className="footer-block">
          <a href="/">
            <img id="footer-logo" src={Logo} alt="logo"></img>
          </a>
        </div>
        <div className="footer-block">
          <h6 className="footer-heading">Download</h6>
          <ul className="verticalMenu">
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>{" "}
              <a href="/JasonSmithCV2025.pdf" target="_blank" className="menu-item" download>
                C.V
              </a>
              <span className="rightBracket">]</span>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <h6 className="footer-heading">Navigation</h6>
          <ul className="verticalMenu">
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#intro">
                Intro
              </a>
              <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container verticalLinkPadding">
              <span className="leftBracket">[</span>
              <a className="menu-item" href="#skills">
                Skills
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
              <a className="menu-item" href="#history">
                History
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
          <ul className="verticalMenu">
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
          <li className="footer-icon-link">
            <a
              href="https://www.linkedin.com/in/jason-smith-193674187/"
              target="_blank"
            >
              <img
                alt="linkedin icon"
                src={linkedin}
                width="30px"
                height="auto"
              ></img>
            </a>
          </li>
          <li className="footer-icon-link">
            <a href="https://github.com/Jason-Smith-Code/" target="_blank">
              <img
                src={github}
                width="30px"
                height="auto"
                alt="github icon"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
