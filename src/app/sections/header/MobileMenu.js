import React from "react";

export const MobileMenu = (menuItem) => {
  return (
    <>
      {menuItem.type === "link" ? (
        <li className="menu-item-container verticalLinkPadding">
          <span className="leftBracket darkText">[</span>
          <a className="menu-item darkText" href={`#${menuItem.name}`}>
            {menuItem.name}
          </a>
          <span className="darkText rightBracket">]</span>
        </li>
      ) : (
        <li className="menu-item-container verticalLinkPadding">
          <span className="leftBracket darkText">[</span>
          <a
            className="menu-item darkText"
            href="download/cv.pdf"
            target="_blank"
            download="cv.pdf"
          >
            {menuItem.name}
          </a>
          <span className="rightBracket darkText">]</span>
        </li>
      )}
    </>
  );
};
