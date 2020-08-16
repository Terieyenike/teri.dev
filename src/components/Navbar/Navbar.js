import React, { useState } from 'react';
import Container from '../Container';
import { NavContainer, NavWrapper } from './Navbar.style';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <NavContainer>
        <Container>
          <NavWrapper>
            <NavbarHeader handleNavbar={handleNavbar} />
            <NavbarLinks navbarOpen={navbarOpen} />
          </NavWrapper>
        </Container>
      </NavContainer>
    </>
  );
};

export default Navbar;
