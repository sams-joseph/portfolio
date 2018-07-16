import React from 'react';

import {
  HeroContainer,
  HeroBkg,
  Lockup,
  Heading,
  Name,
  Emphasis,
  Button,
  Wrapper
} from './Styled';

function Hero({ posts }) {
  console.log(posts[0].node.fields.slug)
  return (
    <HeroContainer>
      <Wrapper flex center fullHeight>
        <Lockup>
          <Name>Hello. I'm Joe</Name>
          <Heading>I Build Awesome</Heading>
          <Emphasis>Websites</Emphasis>
          <Button to={`${posts[0].node.fields.slug}`}>Take a look</Button>
        </Lockup>
      </Wrapper>
      <HeroBkg />
    </HeroContainer>
  );
}

export default Hero;
