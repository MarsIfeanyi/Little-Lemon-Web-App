import React, { Fragment } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />

        <Main></Main>

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
