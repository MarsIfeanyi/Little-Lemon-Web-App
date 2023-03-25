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
      <div className="mt-14  flex flex-col md:flex-row justify-between mb-6 ml-16 md:ml-0">
        <header>
          <img src={littleLogo} alt="littleLemonLogo" className="ml-20 w-52 " />
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

        <div className="flex flex-col mt-8 md:mt-0">
          <h2 className="text-2xl">Contact </h2>
          <p className="mt-4 text-xl">
            #10 Chicago street <br /> littlemon@gmail.com <br />
            +1205908930383
          </p>
        </div>

        <div className="flex flex-col space-y-4 mr-20 mt-6 md:mt-0 ">
          <img src={FacebookLogo} alt="facebookLogo" className="w-10" />
          {/* <img src={IntaLogo} alt="intagramLogo" className="w-10" /> */}
          <img src={TwitterLogo} alt="twitterLogo" className="w-10" />
          <img src={LinkedinLogo} alt="linkedinLogo" className="w-10" />
          <img src={WhatsappLogo} alt="whatsappLogoLogo" className="w-10" />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
