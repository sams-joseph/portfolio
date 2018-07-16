import React from 'react';
import { navigateTo } from 'gatsby-link';

import { ProjectContainer, Card, Meta, Image, Title, Links } from './Styled';
import githubIcon from './img/github.svg';
import linkIcon from './img/link.svg';

function Project({ img, title, description, slug }) {
  return (
    <ProjectContainer>
      <Card>
        <Image img={img} onClick={() => navigateTo(`/${slug}`)} />
        <Meta>
          <Title>{title}</Title>
          <Links>
            <a href="#">
              <img src={githubIcon} alt="" />
            </a>
            <a href="#">
              <img src={linkIcon} alt="" />
            </a>
          </Links>
        </Meta>
      </Card>
    </ProjectContainer>
  );
}

export default Project;
