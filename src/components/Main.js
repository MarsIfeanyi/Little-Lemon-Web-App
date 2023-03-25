import React, { Fragment, useState } from "react";
import BookingForm from "./BookingForm";

import { Greeksalad, Bruchetta, Noodles } from "../assets";

const Main = (props) => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const menuCart = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$15.99",
      description:
        "Little lemon restaurant offer the best dishes and table reservation for all your special events",
      image: Greeksalad,
    },
    {
      id: 2,
      name: "Bruchetta",
      price: "$20.5",
      description:
        "Little lemon restaurant offer the best dishes and table reservation for all your special events",
      image: Bruchetta,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$10.99",
      description:
        "Little lemon restaurant offer the best dishes and table reservation for all your special events",
      image: Greeksalad,
    },
    {
      id: 4,
      name: "Noodles",
      price: "$15.99",
      description:
        "Little lemon restaurant offer the best dishes and table reservation for all your special events",
      image: Noodles,
    },
  ];

  return (
    <Fragment>
      <div className="mt-20 p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="ml-16 text-2xl font-medium">This weeks Special!</h1>
          <button className="rounded-2xl bg-pri02 px-4 py-2 text-xl mr-32">
            Online Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mx-10">
          {menuCart.map((menu) => (
            <div key={menu.id} className=" bg-bg01 rounded-2xl p-4 ">
              <img
                src={menu.image}
                alt="menuImage"
                className="rounded-2xl w-fit "
              />
              <div className="flex flex-row  mt-6 font-medium text-xl">
                <h2 className="ml-3 ">{menu.name}</h2>
                <p className="ml-12">{menu.price}</p>
              </div>
              <p className="ml-3 mt-2 mb-5">{menu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      /> */}
    </Fragment>
  );
};

export default Main;
