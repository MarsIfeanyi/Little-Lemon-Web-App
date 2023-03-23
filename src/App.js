import React, { Fragment } from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";

import Footer from "./components/Footer";

// import "./App.css";

import HomePage from "./page/HomePage";
import BookingPage from "./page/BookingPage";
function App() {
  return (
    <Fragment>
      <div className="">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
