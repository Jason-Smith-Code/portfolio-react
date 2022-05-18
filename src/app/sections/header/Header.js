import React from "react";
import { Menu } from "./Menu";
import "./Header.scss";
import Logo from "../../../images/logo-100.png";

export const Header = () => {
  return (
    <header>
      <a href="">
        <img id="top-logo" src={Logo}></img>
      </a>
      <Menu />
    </header>
  );
};
