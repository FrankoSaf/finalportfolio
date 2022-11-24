import React from 'react';
import '../../../UI/Main/Projects/ProjectsCard.scss';
import { VscLinkExternal } from 'react-icons/vsc';
const ProjectCards = ({ name, description, links, process, technologies }) => {
  return (
    <li className='project_card'>
      <div className='project_card-heading'>
        <h3>{name}</h3>
        <div className='project_card-heading-img'>
          <img src='' alt='' />
        </div>
      </div>
      <div className='project_card-links'>
        <a href={`${links[1]}`} target='_blank' rel='noreferrer'>
          Live <VscLinkExternal />
        </a>
        <a href={`${links[0]}`} target='_blank' rel='noreferrer'>
          Github <VscLinkExternal />
        </a>
      </div>
      <div className='project_card-about'>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
      <div className='project_card-process'>
        <h4>Process:</h4>
        <p>{process}</p>
      </div>
      <ul className='project_card-technologies'>
        {technologies.map((technology) => (
          <li>{technology}</li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectCards;
