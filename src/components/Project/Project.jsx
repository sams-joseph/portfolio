import React from 'react';
import { navigateTo } from 'gatsby-link';

import { ProjectContainer, Card, Meta, Image, Title, Links } from './Styled';
import githubIcon from './img/github.svg';
import linkIcon from './img/link.svg';

function Project({ img, title, description, slug, github, url }) {
  return (
    <ProjectContainer>
      <Card>
        <Image img={img} onClick={() => navigateTo(`/${slug}`)} />
        <Meta>
          <Title>{title}</Title>
          <Links>
            <a target="blank" href={github}>
              <img src={githubIcon} alt="" />
            </a>
            {url && (
              <a target="blank" href={url}>
                <img src={linkIcon} alt="" />
              </a>
            )}
          </Links>
        </Meta>
      </Card>
    </ProjectContainer>
  );
}

export default Project;
