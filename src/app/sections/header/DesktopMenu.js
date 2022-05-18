import React from "react";

export const DesktopMenu = (menuItem) => {
  return (
    <>
      {menuItem.type === "link" ? (
        <li className="menu-item-container">
          <span className="leftBracket">[</span>
          <a className="menu-item" href={`#${menuItem.name}`}>
            {menuItem.name}
          </a>
          <span className="rightBracket">]</span>
        </li>
      ) : (
        <li className="menu-item-container">
          <span className="leftBracket">[</span>
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
      )}
    </>
  );
};
