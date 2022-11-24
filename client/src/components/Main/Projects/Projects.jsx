import React from 'react';
import ProjectCards from './ProjectCards';
import '../../../UI/Main/Projects/Projects.scss';
import { projects } from '../../../assets/projects/projects';

const Projects = () => {

  return (
    <section className='projects_container' id='projects'>
      <h2>Projects</h2>
      <ul className='projects'>
        {projects.map((project) => (
          <ProjectCards
            name={project.name}
            links={project.links}
            description={project.description}
            process={project.process}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
