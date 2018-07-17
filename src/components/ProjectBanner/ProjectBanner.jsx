import React from 'react';

import {
  ProjectBannerContainer,
  Wrapper,
  Col,
  Heading,
  List,
  Button,
} from './Styled';

function ProjectBanner({ featureImage, url, github, techs }) {
  return (
    <ProjectBannerContainer>
      <Wrapper flex>
        <Col>
          <img src={featureImage} alt="Feature" />
        </Col>
        <Col>
          <Heading>Technologies</Heading>
          <List>{techs.map(tech => <li>{tech}</li>)}</List>
          {url && (
            <Button target="blank" href={url}>
              Visit Site
            </Button>
          )}
          <Button target="blank" href={github}>
            View on Github
          </Button>
        </Col>
      </Wrapper>
    </ProjectBannerContainer>
  );
}

export default ProjectBanner;
