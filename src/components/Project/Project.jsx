import React from "react"

import { Container, Image, Heading, Body, ViewLink } from "./styled"

const Hero = ({ src, title, body, url }) => (
  <Container>
    <Image src={src} alt="Project Image"></Image>
    <Heading>{title}</Heading>
    <Body>{body}</Body>
    <ViewLink to={url}>View Project</ViewLink>
  </Container>
)

export default Hero
