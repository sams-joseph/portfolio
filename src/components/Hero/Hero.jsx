import React from "react"

import {
  HeroContainer,
  Container,
  HeroContent,
  HeroImage,
  Wave,
  Button,
} from "./styled"

import rocketImage from "./images/rocket-illustration.png"

const Hero = () => {

  return (
    <HeroContainer>
      <Container flex>
        <HeroContent>
          <span>Hello</span>
          <h1>My name is Joe</h1>
          <p>
            I build web applications with a mission to create simple, easy to
            use solutions, by using modern design and best practices.
          </p>
          <Button to="#projects">Take a Look</Button>
        </HeroContent>
      </Container>
      <HeroImage>
        <img src={rocketImage} alt="Ready for startup" />
      </HeroImage>
      <Wave viewBox="0 0 1920 265">
        <path
          fill="#CEE9FF"
          d="M722.2,184.25c-437.74,0-663.86-54.77-722.2-82.6v141.1H1920V0C1590.13,0,1269.37,184.25,722.2,184.25Z"
        />
        <path
          fill="#EAF6FF"
          d="M722.2,208.4C284.45,208.4,58.34,152.73,0,124.9V265H1920V0C1590.13,0,1269.37,208.4,722.2,208.4Z"
        />
        <path
          fill="white"
          d="M722.2,233.5C284.45,233.5,58.34,177.83,0,150V265H1920V0C1590.13,0,1269.37,233.5,722.2,233.5Z"
        />
      </Wave>
    </HeroContainer>
  )
}

export default Hero
