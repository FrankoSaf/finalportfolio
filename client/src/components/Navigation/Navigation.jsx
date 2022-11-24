import React, { useState } from 'react';
import '../../UI/Navigation/Navigation.scss';
const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  return (
    <div className='nav_container' style={showNav ? { height: '30rem' } : {}}>
      <nav className='nav'>
        <div className='nav_hero'></div>
        <div className='nav_right'>
          <ul className='nav_right-links-desktop'>
            {links.map((link) => (
              <li>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div
            className='nav_right_burger'
            onClick={() => setShowNav(!showNav)}
          >
            <span
              className={`nav_right_burger_line nav_right_burger_line-top ${
                showNav ? 'rotate_top' : ''
              }`}
            ></span>
            <span
              className={`nav_right_burger_line nav_right_burger_line-middle ${
                showNav ? 'move-middle' : ''
              }`}
            ></span>
            <span
              className={`nav_right_burger_line nav_right_burger_line-bottom ${
                showNav ? 'rotate_bottom' : ''
              }`}
            ></span>
          </div>

          <ul className={`nav_right-links ${showNav ? 'spread_links' : ''}`}>
            {links.map((link) => (
              <li>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
