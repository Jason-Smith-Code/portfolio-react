import React from "react";
import "./Menu.scss";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Menu = () => {
  const menuItems = [
    {
      name: "intro",
      type: "link",
    },
    {
      name: "Me",
      type: "link",
    },
    {
      name: "Stats",
      type: "link",
    },
    {
      name: "About",
      type: "link",
    },
    {
      name: "Journey",
      type: "link",
    },
    {
      name: "Experience",
      type: "link",
    },
    {
      name: "Portfolio",
      type: "link",
    },
    {
      name: "C.V",
      type: "download",
    },
  ];

  var theMobileMenu = document.querySelector(".mobileMenu");
  function openNav() {
    theMobileMenu.style.transform = "translateX(0px)";
  }

  function closeNav() {
    theMobileMenu.style.transform = "translateX(300px)";
  }

  const createDesktopMenuItems = () => {
    return menuItems.map((menuItem) => (
      <DesktopMenu name={menuItem.name} type={menuItem.type} />
    ));
  };

  const createMobileMenuItems = () => {
    return menuItems.map((menuItem) => (
      <MobileMenu name={menuItem.name} type={menuItem.type} />
    ));
  };

  return (
    <>
      <nav id="desktopMenu">
        <ul id="menu">{createDesktopMenuItems()}</ul>

        <div
          id="openMenuButton"
          className="menu-item-container"
          onClick={openNav}
        >
          <span className="leftBracket">[</span>
          <a className="menu-item">OPEN MENU</a>
          <span className="rightBracket">]</span>
        </div>
      </nav>

      <nav className="mobileMenu">
        <ul id="verticalMenu">
          <div className="closeMenuButton" onClick={closeNav}>
            <a className="darkText">[CLOSE MENU]</a>
          </div>
          {createMobileMenuItems()}
        </ul>
      </nav>
    </>
  );
};
