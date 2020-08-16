/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '../../components/Container';
import {
  Section,
  Row,
  Paragraph,
  Main,
  Div,
  Headline,
  Details,
  Title,
  Description,
  LinkWrapper,
  Top,
  View,
  Blue,
  Footer,
  TextF,
  RowF,
  FirstRow,
  SecondRow,
} from './Home.style';
import projects from '../../projects';
import { Link } from 'react-router-dom';
import {
  FiChevronRight,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiCamera,
} from 'react-icons/fi';

const Home = () => {
  return (
    <Main>
      <Section>
        <Container>
          <Top>
            <Paragraph>
              Hey, I'm Teri{' '}
              <span role='img' aria-label='say hello'>
                👋
              </span>
            </Paragraph>
            <p>
              I'm a JavaScript Engineer from Nigeria{' '}
              <span role='img' aria-label='Nigeria flag'>
                🇳🇬
              </span>{' '}
              in love with React and Node.
            </p>
            <p>
              If I'm not coding, I'm likely shooting with my camera as a street
              photography (I'm a huge art enthusiast) creating moments in
              pixels.
            </p>
            <p>
              Check me out,{' '}
              <a
                href='https://instagram.com/terieyenike'
                target='_blank'
                rel='noopener noreferrer'>
                here.
              </a>
            </p>
          </Top>
        </Container>
      </Section>
      <Div>
        <Container>
          <Headline>Projects</Headline>
          <div>
            {projects.map((project) => {
              return (
                <Row key={project.id}>
                  <Details>
                    <div>
                      <Title>{project.title}</Title>
                      <Description>{project.description}</Description>
                    </div>
                    <LinkWrapper>
                      <a
                        href={project.link}
                        rel='noopener noreferrer'
                        target='_blank'>
                        See Live
                      </a>
                      <a
                        href={project.source}
                        rel='noopener noreferrer'
                        target='_blank'>
                        Source
                      </a>
                    </LinkWrapper>
                  </Details>
                  <img src={project.image} alt='project one' />
                </Row>
              );
            })}
          </div>
          <View>
            <Link to='/projects'>View all</Link>
            <FiChevronRight />
          </View>
        </Container>
      </Div>

      <Div>
        <Blue>
          <Container>
            <div>
              <Title>Contact</Title>

              <a
                href='mailto:teyenike1@gmail.com?subject=Work with me'
                rel='noopener noreferrer'>
                hire me
              </a>
            </div>
          </Container>
        </Blue>
      </Div>
      <Footer>
        <Container>
          <RowF>
            <FirstRow>
              <TextF>About</TextF>
              <p>
                Welcome to my website! I am all about learning and development
                which are my core interest as a JavaScript Engineer.{' '}
              </p>
            </FirstRow>
            <SecondRow>
              <TextF>Social connect</TextF>
              <div>
                <a
                  href='https://github.com/terieyenike/eyenike.dev'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <FiGithub />
                  </span>
                  View source on Github
                </a>
                <a
                  href='https://twitter.com/terieyenike'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <FiTwitter />
                  </span>
                  Follow me on Twitter
                </a>
                <a
                  href='https://linkedin.com/in/terieyenike'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <FiLinkedin />
                  </span>
                  Connect with me on LinkedIn
                </a>
                <a
                  href='https://instagram.com/terieyenike'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <FiCamera />
                  </span>
                  See my stories on Instagram
                </a>
              </div>
            </SecondRow>
          </RowF>
        </Container>
      </Footer>
    </Main>
  );
};

export default Home;
