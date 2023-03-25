import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <ul className="flex  flex-col md:flex-row space-x-0 md:space-x-6 space-y-2 md:space-y-0 mr-20 text-xl ml-16 md:ml-0 ">
          {/* <li>
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
          </li> */}

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Menu</Link>
          </li>
          <li>
            {" "}
            <Link to="/booking">Reservation</Link>
          </li>
          <li>
            {" "}
            <Link to="/booking">Order Online</Link>
          </li>

          <li>
            {" "}
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
