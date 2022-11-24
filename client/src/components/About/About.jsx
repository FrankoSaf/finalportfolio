import React, { useEffect } from 'react';
import '../../UI/Main/About/About.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <motion.div
      initial='hidden'
      variants={squareVariants}
      className='square'
      ref={ref}
      animate={controls}
    >
      <section className='about_container' id='about'>
        <div className='about'>
          <h2>
            I make things <span>for the web</span>
          </h2>
          <div className='about-sub'>
            <h3>About</h3>
            <p>
              The Fullstack developer,recently graduated from one year long
              bootcamp, looking for new opportunities and challenges.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
