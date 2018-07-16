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

function Hero() {
  return (
    <HeroContainer>
      <Wrapper flex center fullHeight>
        <Lockup>
          <Name>Hello. I'm Joe</Name>
          <Heading>I Build Awesome</Heading>
          <Emphasis>Websites</Emphasis>
          <Button>Take a look</Button>
        </Lockup>
      </Wrapper>
      <HeroBkg />
    </HeroContainer>
  );
}

export default Hero;
