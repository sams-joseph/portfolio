import React from 'react';
import Link from 'gatsby-link';

import { ProjectContainer, Card, Meta, Image } from './Styled';

function Project({ img, title, description, slug }) {
  return (
    <ProjectContainer>
      <Card>
        <Image img={img} />
        <Meta>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={`/${slug}`}>{}</Link>
        </Meta>
      </Card>
    </ProjectContainer>
  );
}

export default Project;
