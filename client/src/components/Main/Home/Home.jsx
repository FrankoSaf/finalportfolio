import React from 'react';
import '../../../UI/Main/Home/Home.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

const Home = () => {
  return (
    <section className='home_container'>
      <div className='home'>
        <img src='profile.jpg' alt='' />
        <h1>Hi, I'm Franko</h1>
        <h3>Fullstack Developer</h3>
        <p>I'm fresh bootcamp graduate, in a search for new opportunities</p>
        <div className='home_links'>
          <a
            href='Franko Safradin English.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <CgFileDocument />
            Resume
          </a>

          <a
            href='https://www.linkedin.com/in/franko-safradin-4a319b249/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin />
            LinkedIn
          </a>

          <a
            href='https://github.com/FrankoSaf'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
