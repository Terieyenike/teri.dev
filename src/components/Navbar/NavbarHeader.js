import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';
import { NavLogo, NavLogoWrapper, Header } from './Navbar.style';
import Teri from './teri.jpg';

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <>
      <Header>
        <NavLogo>
          <NavLogoWrapper>
            <img src={Teri} alt='Teri Eyenike' />
            <Link to='/' className='logo'>
              Teri Eyenike
            </Link>
          </NavLogoWrapper>
          <FiAlignRight onClick={handleNavbar} className='toggle-icon' />
        </NavLogo>
      </Header>
    </>
  );
};

export default NavbarHeader;
