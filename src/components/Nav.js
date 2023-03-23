import React, { Fragment } from "react";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <ul className="flex  flex-col md:flex-row space-x-0 md:space-x-6 space-y-2 md:space-y-0 mr-8 text-xl ">
          <li>
            {" "}
            <a href="/">Home</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Reservation</a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
