import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from './Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Main;
