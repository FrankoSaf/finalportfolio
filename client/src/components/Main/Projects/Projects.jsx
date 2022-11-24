import React from 'react';
import ProjectCards from './ProjectCards';
const Projects = () => {
  return (
    <section className='projects_container'>
      <h2>Projects</h2>
      <ul className='projects'>
        <ProjectCards />
        <ProjectCards />
      </ul>
    </section>
  );
};

export default Projects;
