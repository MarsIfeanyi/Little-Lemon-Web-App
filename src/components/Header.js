import React, { Fragment } from "react";
import Nav from "../components/Nav";
import { littleLogo } from "../assets";

const Header = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-between">
        <header>
          <img src={littleLogo} alt="littleLemonLogo" className="w-52" />
        </header>

        <Nav />
      </div>
    </Fragment>
  );
};

export default Header;
