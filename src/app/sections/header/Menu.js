import React, { useRef } from "react";
import "./Menu.scss";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Menu = () => {
  const mobileMenuRef = useRef();
  const menuItems = [
    {
      name: "intro",
      type: "link",
    },
    {
      name: "skills",
      type: "link",
    },
    {
      name: "about",
      type: "link",
    },
    {
      name: "journey",
      type: "link",
    },
    {
      name: "experience",
      type: "link",
    },
    {
      name: "portfolio",
      type: "link",
    },
    {
      name: "C.V",
      type: "download",
    },
  ];

  const createDesktopMenuItems = () => {
    return menuItems.map((menuItem) => (
      <DesktopMenu
        name={menuItem.name}
        type={menuItem.type}
        key={menuItem.name}
      />
    ));
  };

  const createMobileMenuItems = () => {
    return menuItems.map((menuItem) => (
      <MobileMenu
        name={menuItem.name}
        type={menuItem.type}
        key={menuItem.name}
      />
    ));
  };

  function openMenu() {
    mobileMenuRef.current.classList.remove("off-screen");
  }

  function closeMenu() {
    mobileMenuRef.current.classList.add("off-screen");
  }

  return (
    <>
      <div id="desktopMenu">
        <ul id="menu">{createDesktopMenuItems()}</ul>

        <div
          id="openMenuButton"
          className="menu-item-container"
          onClick={openMenu}
        >
          <span className="leftBracket">[</span>
          <a className="menu-item">OPEN MENU</a>
          <span className="rightBracket">]</span>
        </div>
      </div>

      <nav ref={mobileMenuRef} id="mobileMenu" className="off-screen">
        <ul className="verticalMenu">
          <li className="menu-item-container verticalLinkPadding">
            <span className="leftBracket darkText">[</span>
            <a className="menu-item darkText" onClick={closeMenu}>
              CLOSE MENU
            </a>
            <span className="darkText rightBracket">]</span>
          </li>
          {createMobileMenuItems()}
        </ul>
      </nav>
    </>
  );
};
