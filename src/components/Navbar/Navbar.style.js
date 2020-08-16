import styled from 'styled-components';

export const NavContainer = styled.div`
  /* padding: 1em 0; */
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  background: white;
`;

export const Header = styled.header`
  padding: 1em 0 0;
  @media screen and (min-width: 768px) {
    padding: 1em 0;
  }
`

export const NavWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 4.5rem;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;

export const NavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 15%;
    border-radius: 50%;
    margin-right: 0.85em;
  }
  a {
    text-decoration: none;
    font-weight: 700;
  }

  .logo {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 7%;
    }
    .logo {
      font-size: 1.85rem;
    }
  }
`;

export const LinkWrapper = styled.nav`
  height: ${({ open }) => (open ? '110px' : '0px')};
  overflow: hidden;
  transition: all 1s ease-in-out;
  margin-top: 1em;
  .nav__link, .tweet {
    font-size: 1.5rem;
    font-family: Montserrat, sans-serif;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: #636363;
  }



  .fitwitter {
    font-weight: 400;
    font-size: 1.5rem;
  }

  .nav__item + .nav__item {
    margin-top: 1em;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    height: auto;
    .nav__link {
      font-size: 1.5rem;
    }
    ul {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .tweet {
      display: none;
    }
  }
`;
