import React from 'react';

import {
  ProjectBannerContainer,
  Wrapper,
  Col,
  Heading,
  List,
  Button,
  Nav,
  NavLink,
} from './styled';

function ProjectBanner({ children, url, github, techs, heading, download }) {
  return (
    <div>
      <ProjectBannerContainer>
        <Wrapper flex>
          <Col>{children}</Col>
          <Col>
            <Heading>{heading}</Heading>
            {techs && (
              <List>
                {techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </List>
            )}
            {url && (
              <Button target="blank" href={url}>
                Visit Site
              </Button>
            )}
            {github && (
              <Button target="blank" href={github}>
                View on Github
              </Button>
            )}
            {download && (
              <Button target="blank" href={download}>
                Download
              </Button>
            )}
          </Col>
        </Wrapper>
      </ProjectBannerContainer>
      <Nav>
        <Wrapper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
        </Wrapper>
      </Nav>
    </div>
  );
}

export default ProjectBanner;
