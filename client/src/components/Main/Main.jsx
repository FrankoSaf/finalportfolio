import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default Main;
