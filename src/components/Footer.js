import React, { Fragment } from "react";
import {
  littleLogo,
  FacebookLogo,
  IntaLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "../assets";

const Footer = () => {
  return (
    <Fragment>
      <div className="mt-32 space-y-4  flex flex-col md:flex-row justify-between bg-yellow-400 mb-0 ">
        <header>
          <img src={littleLogo} alt="littleLemonLogo" />
        </header>
        <nav>
          <ul className="flex  flex-col  space-y-2  text-xl ">
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
        <div className="flex flex-col space-y-4 mr-8 ">
          <img src={FacebookLogo} alt="facebookLogo" className="w-10" />
          <img src={IntaLogo} alt="intagramLogo" className="w-10" />
          <img src={TwitterLogo} alt="twitterLogo" className="w-10" />
          <img src={LinkedinLogo} alt="linkedinLogo" className="w-10" />
          <img src={WhatsappLogo} alt="whatsappLogoLogo" className="w-10" />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
