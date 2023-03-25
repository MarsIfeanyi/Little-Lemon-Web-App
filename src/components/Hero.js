import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { HeroImage } from "../assets";

const Hero = () => {
  return (
    <Fragment>
      <div className="flex flex-row bg-pri01 px-16 py-10 items-center justify-between mt-40 ">
        <div className="  ml-12">
          <h1 className="text-pri02  text-2xl font-bold">Little Lemon</h1>
          <h3 className="text-white text-xl">Chicago</h3>
          <p className="text-white mt-8">
            Little lemon restaurant offer the best dishes <br /> and table
            reservation for all your special events.
          </p>
          <button className="rounded-2xl bg-pri02 ml-10 mt-6 px-4 py-2 text-xl">
            <Link to="/booking"> Reserve a Table</Link>
          </button>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="heroImage"
            className="w-48 rounded-xl -mb-24 mr-20 "
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
