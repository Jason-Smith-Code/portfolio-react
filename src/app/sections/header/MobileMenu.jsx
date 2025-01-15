import React from "react";

export const MobileMenu = (menuItem) => {
  function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.add("off-screen");
  }

  return (
    <>
      {menuItem.type === "link" ? (
        <li className="menu-item-container verticalLinkPadding">
          <span className="leftBracket darkText">[</span>
          <a
            onClick={closeMenu}
            className="menu-item darkText"
            href={`#${menuItem.name}`}
          >
            {menuItem.name}
          </a>
          <span className="darkText rightBracket">]</span>
        </li>
      ) : (
        <li className="menu-item-container verticalLinkPadding">
          <span className="leftBracket darkText">[</span>
          <a
            onClick={closeMenu}
            className="menu-item darkText"
            href="JasonSmithCV2025.pdf"
            target="_blank"
            download
          >
            {menuItem.name}
          </a>
          <span className="rightBracket darkText">]</span>
        </li>
      )}
    </>
  );
};
