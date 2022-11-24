import React from 'react';
import '../../../UI/Main/Projects/ProjectsCard.scss';
import { VscLinkExternal } from 'react-icons/vsc';
const ProjectCards = () => {
  return (
    <li className='project_card'>
      <div className='project_card-heading'>
        <h3>Lord of the Lunchroom</h3>
        <div className='project_card-heading-img'>
          <img src='' alt='' />
        </div>
      </div>
      <div className='project_card-links'>
        <a href='#'>
          Live
          <VscLinkExternal />
        </a>
        <a href='#'>
          Github <VscLinkExternal />
        </a>
      </div>
      <div className='project_card-about'>
        <h4>Description</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto
        mollitia consectetur voluptatibus perspiciatis consequuntur possimus.
      </div>
      <div className='project_card-process'>
        <h4>Process</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla
        magni pariatur neque ipsa. Accusamus beatae, dolores quo nulla
        repudiandae impedit quod incidunt, harum nemo sunt, totam expedita
        maxime necessitatibus.
      </div>
      <ul className='project_card-technologies'>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
      </ul>
    </li>
  );
};

export default ProjectCards;
