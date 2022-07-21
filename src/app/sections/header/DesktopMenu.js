import React from "react";
import './DesktopMenu.scss';

export const DesktopMenu = (menuItem) => {
  return (
    <>
      {menuItem.type === "link" ? (
        <li className="menu-item-container menu-spacing">
          <span className="leftBracket">[</span>
          <a className="menu-item" href={`#${menuItem.name}`}>
            {menuItem.name}
          </a>
          <span className="rightBracket">]</span>
        </li>
      ) : (
        <li className="menu-item-container menu-spacing">
          <span className="leftBracket">[</span>
          <a href="/cv.pdf" target="_blank" className="menu-item" download>
            C.V
          </a>
          <span className="rightBracket">]</span>
        </li>
      )}
    </>
  );
};
