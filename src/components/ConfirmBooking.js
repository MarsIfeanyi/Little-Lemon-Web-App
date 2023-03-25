import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ConfirmBooking = () => {
  return (
    <Fragment>
      <h1>Your Booking has be confirmed</h1>

      <Link to="/confirm-booking">Confirm Booking</Link>
    </Fragment>
  );
};

export default ConfirmBooking;
