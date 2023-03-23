import React, { Fragment } from "react";
import Nav from "../components/Nav";
import { littleLogo } from "../assets";

const Header = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-between mt-10  border-b-2 shadow-lg fixed top-0 left-0 right-0 ">
        <header>
          <img
            src={littleLogo}
            alt="littleLemonLogo"
            className="w-52  ml-20 mb-4"
          />
        </header>

        <Nav />
      </div>
    </Fragment>
  );
};

export default Header;
