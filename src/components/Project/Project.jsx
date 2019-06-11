import React from "react"

import { Container, Image, Heading, Body, ViewLink } from "./styled"

const Hero = ({ children, title, body, url }) => (
  <Container>
    <Image>
      {children}
    </Image>
    <Heading>{title}</Heading>
    <Body>{body}</Body>
    <ViewLink to={url}>View Project</ViewLink>
  </Container>
)

export default Hero
