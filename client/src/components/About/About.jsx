import React from 'react';
import '../../UI/Main/About/About.scss';
const About = () => {
  return (
    <section className='about_container'>
      <div className='about'>
        <h2>
          I make things <span>for the web</span>
        </h2>
        <div className='about-sub'>
          <h3>About</h3>
          <p>
            The Fullstack developer,recently graduated from one year long
            bootcamp, looking for new opportunities and challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
