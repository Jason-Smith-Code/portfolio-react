import React from "react";
import { Menu } from "./Menu";
import "./Header.scss";
import Logo from "../../../images/logo-100.png";

export const Header = () => {
  return (
    <header>
      {/* Add link wrapper to logo */}
      <img id="top-logo" src={Logo}></img>
      <Menu />
    </header>
  );
};

// fix the header to the top of the screen
