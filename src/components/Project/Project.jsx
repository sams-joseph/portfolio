import React from 'react';
import { navigateTo } from 'gatsby-link';

import { ProjectContainer, Card, Meta, Image } from './Styled';

function Project({ img, title, description, slug }) {
  return (
    <ProjectContainer>
      <Card onClick={() => navigateTo(`/${slug}`)}>
        <Image img={img} />
        <Meta>
          <h2>{title}</h2>
          <p>{description}</p>
        </Meta>
      </Card>
    </ProjectContainer>
  );
}

export default Project;
