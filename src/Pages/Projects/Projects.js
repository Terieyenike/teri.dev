import React from 'react';
import Container from '../../components/Container';
import projects from '../../allprojects';
// import {} from './Projects.style'
import {
  Section,
  Paragraph,
  Main,
  Div,
  Details,
  LinkWrapper,
  Title,
  Row,
  Description,
  Footer,
  RowF,
  FirstRow,
  SecondRow,
  TextF,
} from '../Home/Home.style';
import { FiLinkedin, FiTwitter, FiGithub, FiCamera } from 'react-icons/fi';

const Projects = () => {
  return (
    <Main>
      <Section>
        <Container>
          <Paragraph>All projects</Paragraph>
        </Container>
      </Section>
      <Div>
        <Container>
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
        </Container>
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
                  href='https://github.com/terieyenike/terieyenike.dev'
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

export default Projects;
