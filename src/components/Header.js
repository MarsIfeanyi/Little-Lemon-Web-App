import React, { Fragment } from "react";
import Nav from "../components/Nav";
import { littleLogo } from "../assets";

const Header = () => {
  return (
    <Fragment>
      <div>
        <header>
          <img src={littleLogo} alt="littleLemonLogo" />
        </header>

        <Nav />
      </div>
    </Fragment>
  );
};

export default Header;
