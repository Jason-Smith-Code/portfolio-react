import React from "react";
import "./Menu.scss";

export const Menu = () => {
  var theMobileMenu = document.querySelector('.mobileMenu');
  function openNav() {
      theMobileMenu.style.transform = "translateX(0px)";
  }

  function closeNav() {
      theMobileMenu.style.transform = "translateX(300px)";
  }

  return (
    <>
      <nav id="desktopMenu">
        <ul id="menu">
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#intro">Intro</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#me">Me</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#stats">Stats</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#about">About</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#journey">Journey</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#experience">Experience</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a className="menu-item" href="#portfolio">Portfolio</a>
                <span className="rightBracket">]</span>
            </li>
            <li className="menu-item-container">
                <span className="leftBracket">[</span>
                <a href="download/cv.pdf" target="_blank" className="menu-item" download="cv.pdf">C.V</a>
                <span className="rightBracket">]</span>
            </li>
        </ul>

      <div id="openMenuButton" className="menu-item-container" onClick={openNav}>
          <span className="leftBracket">[</span>
          <a className="menu-item">OPEN MENU</a>
          <span className="rightBracket">]</span>
      </div>
    </nav>
    <nav class="mobileMenu">
      <ul id="verticalMenu">
        <div class="closeMenuButton" onclick={closeNav}><a class="darkText">[CLOSE MENU]</a></div>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="#intro">Intro</a>
            <span class="darkText rightBracket">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span> 
            <a class="menu-item darkText" href="#stats">Stats</a>
            <span class="rightBracket darkText">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="#about">About</a>
            <span class="rightBracket darkText">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="#journey">Journey</a>
            <span class="rightBracket darkText">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="#experience">Experience</a>
            <span class="rightBracket darkText">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="#portfolio">Portfolio</a>
            <span class="rightBracket darkText">]</span>
        </li>
        <li class="menu-item-container verticalLinkPadding">
            <span class="leftBracket darkText">[</span>
            <a class="menu-item darkText" href="download/cv.pdf" target="_blank" download="cv.pdf">C.V</a>
            <span class="rightBracket darkText">]</span>
        </li>
      </ul>
    </nav>
    
    </>
  );
};
