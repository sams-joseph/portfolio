import React from "react"

import { Wrapper, Container, Bkg, Img, Heading, Body } from "./styled"

import rocketImage from "./images/rocket-illustration-solo.svg"

const Footer = () => (
  <Wrapper>
    <Container padding="100px 30px 0 30px">
      <Heading>Ready to start your next project</Heading>
      <Body>
        Check out my other projects including sweet new stuff that might be in
        the works on <a href="https://github.com/sams-joseph">Github</a>!
      </Body>
    </Container>
    <Img src={rocketImage} alt="Rocket blasting off" />
    <Bkg top viewBox="0 0 1488 186.1" z="0">
      <path
        d="M0,0v87.9c76-36,278.8-100.4,482-70c254,38,334,162,606,168c217.6,4.8,357.3-90,400-138V0H0z"
        fill="#f6f9fc"
      />
    </Bkg>
  </Wrapper>
)

export default Footer
