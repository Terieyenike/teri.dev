import React from 'react';
import { LinkWrapper } from './Navbar.style';
import { Link } from 'react-router-dom';
import { FiTwitter } from 'react-icons/fi';

const NavbarLinks = ({ navbarOpen }) => {
  return (
    <>
      <LinkWrapper open={navbarOpen}>
        <ul>
          <li className='nav__item'>
            <Link to='/projects' className='nav__link'>
              Projects
            </Link>
          </li>

          <li className='nav__item'>
            <a
              href='https://twitter.com/terieyenike'
              rel='noopener noreferrer'
              target='_blank'
              className='tweet'>
              @terieyenike <FiTwitter className='fitwitter' />
            </a>
          </li>
        </ul>
      </LinkWrapper>
    </>
  );
};

export default NavbarLinks;
