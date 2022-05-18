import React from "react";
import { Menu } from "./Menu";
import "./Header.scss";
import Logo from "../../../images/logo.png";

export const Header = () => {
  return (
    <>
      <img src={Logo}></img>
      <p>Header</p>
      <Menu />
    </>
  );
};

//  import the logo
// fix the header to the top of the screen
