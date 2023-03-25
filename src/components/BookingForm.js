import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const setDateHandler = (e) => {
    setDate(e.target.value);
  };

  const setAvailableTimesHandler = (e) => {
    setTime(e.target.value);
  };
  const setNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const setOccasionHandler = (e) => {
    setOccasion(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setDate("");
    setTime("");
    setNumber("");
    setOccasion("");
  };

  return (
    <form onSubmit={formSubmitHandler} className="mt-44">
      <div className="flex flex-col w-96 md:w-1/3 justify-center mx-auto ">
        {/* Date container */}
        <div className="space-y-2 flex flex-col">
          <label htmlFor="res-date">Choose date *</label>
          <input
            type="date"
            name="res-date"
            id="res-date"
            value={date}
            onChange={setDateHandler}
            required
          />
        </div>

        {/* Time Container */}
        <div className="space-y-2 flex flex-col mt-4">
          <label htmlFor="res-time">Choose time *</label>
          <select
            name="res-time"
            id="res-time"
            value={time}
            onChange={setAvailableTimesHandler}
            required
          >
            <option value="">Select time *</option>
            {availableTimes.map((availTime) => (
              <option key={availTime} value={availTime}>
                {availTime}
              </option>
            ))}
          </select>
        </div>

        {/* Number of guest container */}

        <div className="space-y-2 mt-4 flex flex-col">
          <label htmlFor="guests">Number of guests *</label>
          <input
            type="number"
            name="guests"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            value={number}
            onChange={setNumberHandler}
            required
          />
        </div>

        {/*Occasion Container  */}
        <div className="flex flex-col space-y-4 mt-4">
          <label htmlFor="occasion">Occasion *</label>
          <select
            name="occasion"
            id="occasion"
            value={occasion}
            onChange={setOccasionHandler}
            required
          >
            <option value="">Select occasion *</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!date && !time && !number && !occasion}
          className="bg-pri02 py-2 mt-8 rounded-2xl mb-20 "
        >
          Make Your Reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
