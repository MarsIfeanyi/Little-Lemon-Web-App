import React from "react";
import { Image1, Image2, Image3, Image4, Star } from "../assets";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: Image1,
      name: "Martin",
      message:
        "Awesome Dish. I love the services of Little lemon Restaurant Highly recommended",
      rating: Star,
    },

    {
      id: 2,
      image: Image2,
      name: "Kate",
      message:
        "Awesome Dish. I love the services of Little lemon Restaurant Highly recommended",
      rating: Star,
    },
    {
      id: 3,
      image: Image3,
      name: "Kelly",
      message:
        "Awesome Dish. I love the services of Little lemon Restaurant Highly recommended",
      rating: Star,
    },
    {
      id: 4,
      image: Image4,
      name: "Franklin",
      message:
        "Awesome Dish. I love the services of Little lemon Restaurant Highly recommended",
      //   rating: Star,
    },
  ];

  return (
    <div className="bg-bg01 mt-10">
      <h1 className="text-center  text-3xl font-medium py-4">Testimonials</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mx-20">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className=" rounded-2xl p-4 ">
            <img
              src={testimonial.image}
              alt="testimonialImage"
              className="rounded-2xl w-fit"
            />
            <h2 className=" mt-6 font-medium text-xl ml-5 ">
              {testimonial.name}
            </h2>
            <p className="mt-2  ml-5 mb-5">{testimonial.message}</p>
            <div>{/* <p>{testimonial.rating}</p> */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
