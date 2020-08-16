import styled from 'styled-components';

export const Main = styled.main`
  color: #333;
`;

export const Section = styled.section`
  padding: 9em 0 2em;
  main {
    background: #f6f7f8;
  }
`;

export const Div = styled.section`
  padding: 0 0 2em;
`;

export const Top = styled.div`
  p + p {
    margin-top: 1em;
  }
  a:hover,
  a:active {
    text-decoration: underline;
  }

  span[role='img'] {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    width: 75%;
    margin: auto;
  }
`;

export const Row = styled.div`
  img {
    margin-bottom: 2em;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5em;
    img {
      width: 45%;
      margin: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 40%;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 55%;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  margin: 1em 0 0.85em;
  font-size: 1.5rem;
  font-family: Montserrat, sans-serif;

  @media screen and (min-width: 768px) {
    margin: 0 0 1em;
    font-size: 2rem;
    width: 85%;
  }
`;

export const Description = styled.p`
  margin: 0 0 1em;
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 85%;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  width: 100%;
  a {
    color: #044cbc;
    font-weight: 700;
  }
  a + a {
    margin-left: 1em;
  }
  a:nth-child(1) {
    display: inline-block;
    border: 1px solid #044cbc;
    padding: 0.3em 0.75em;
  }
  a:nth-child(1) {
    &:hover {
      background: #044cbc;
      color: white;
      font-weight: 700;
      border: none;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5em;
  font-family: Montserrat, sans-serif;
`;

export const Headline = styled.h3`
  font-size: 2rem;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  a {
    font-weight: 700;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1.5em;
  }
`;

export const Blue = styled.div`
  background: #044cbc;
  padding: 3.5em 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:nth-child(1) {
      color: white;
      text-transform: uppercase;
      font-weight: 700;
    }
    a {
      color: white;
      display: inline-block;
      border: 1px solid #fff;
      padding: 0.3em 0.75em;
      margin-top: 1em;
    }
  }
  @media screen and (min-width: 768px) {
    div:nth-child(1) {
      width: 100%;
      text-align: center;
    }
  }
`;

// footer
export const Footer = styled.footer`
  background: #fff;
  padding: 0 0 1em;
`;

export const RowF = styled.div`
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    width: 80%;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
    max-width: 65rem;
    margin: 0 auto;
  }
`;

export const TextF = styled.p`
  font-weight: 700;
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

export const FirstRow = styled.div`
  margin-bottom: 1.5em;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
export const SecondRow = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  span {
    margin-right: 0.5em;
  }

  a + a {
    margin-top: 1em;
  }
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`;
