/** @format */

import React from "react";
// import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import IntroductionSection from './components/IntroductionSection';
import Project from "./components/Project";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <IntroductionSection />
      <Project />
    </>
  );
};

export default App;
