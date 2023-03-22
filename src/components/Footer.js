import React, { Fragment } from "react";
import { littleLogo, FacebookLogo } from "../assets";
import Nav from "./Nav";

const Footer = () => {
  return (
    <Fragment>
      <div>
        <header>
          <img src={littleLogo} alt="littleLemonLogo" />
        </header>
        <nav>
          <Nav />

          <img src={FacebookLogo} alt="" />
        </nav>
      </div>
    </Fragment>
  );
};

export default Footer;
