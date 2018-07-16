import React from 'react';

import {
  HeroContainer,
  HeroBkg,
  Lockup,
  Heading,
  Name,
  Emphasis,
  Button,
} from './Styled';
import { Container } from '../GlobalStyles';

function Hero() {
  return (
    <HeroContainer>
      <Container flex center fullHeight>
        <Lockup>
          <Name>Hello. I'm Joe</Name>
          <Heading>I Build Awesome</Heading>
          <Emphasis>Websites</Emphasis>
          <Button>Take a look</Button>
        </Lockup>
      </Container>
      <HeroBkg />
    </HeroContainer>
  );
}

export default Hero;
