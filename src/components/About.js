import React from "react";
import { HeroImage } from "../assets";

const About = () => {
  return (
    <div id="about" className="bg-pri01 p-4 mt-10">
      <h1 className="text-center text-white text-3xl font-medium py-2">
        About Us
      </h1>

      <div className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-pri02 ml-20 text-2xl font-medium">
            Little Lemon
          </h2>
          <h3 className="text-white ml-20 mt-1 text-xl">Chicago</h3>
          <p className="text-white ml-20 mt-5">
            Little lemon restaurant offer the best dishes <br /> and table
            reservation for all your special events.
          </p>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="aboutUsImage"
            className="w-40 mr-32 rounded-xl mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
