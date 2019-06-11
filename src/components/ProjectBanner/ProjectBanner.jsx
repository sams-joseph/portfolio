import React from "react"

import {
  ProjectBannerContainer,
  Wrapper,
  Col,
  Heading,
  List,
  Button,
  Nav,
  NavLink,
} from "./styled"

function ProjectBanner({ featureImage, url, github, techs }) {
  return (
    <div>
      <ProjectBannerContainer>
        <Wrapper flex>
          <Col>
            <img src={featureImage} alt="Feature" />
          </Col>
          <Col>
            <Heading>Technologies</Heading>
            <List>
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </List>
            {url && (
              <Button target="blank" href={url}>
                Visit Site
              </Button>
            )}
            <Button target="blank" href={github}>
              View on Github
            </Button>
          </Col>
        </Wrapper>
      </ProjectBannerContainer>
      <Nav>
        <Wrapper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
        </Wrapper>
      </Nav>
    </div>
  )
}

export default ProjectBanner
