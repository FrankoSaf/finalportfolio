import React from 'react';

const Contact = () => {
  return (
    <section className='contact_container' id='contact'>
      <h2>Contact me</h2>
      <h4 style={{ fontSize: '2.6rem' }}>
        Contact forms are sometimes overrated
      </h4>
      <p style={{ fontSize: '2.4rem' }}>
        Here is my email if you have any questions or inquires:
      </p>
      <a href='mailto:franko.safradin13@gmail.com' style={{ fontSize: '2rem' }}>
        franko.safradin13@gmail.com
      </a>
    </section>
  );
};

export default Contact;
