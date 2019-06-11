import { Link } from "gatsby"
import React from "react"

import { HeaderContainer, Container } from "./styled"

const Header = () => (
  <HeaderContainer>
    <Container>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
      <Link
        to="/#projects"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginLeft: "30px",
        }}
      >
        Projects
      </Link>
    </Container>
  </HeaderContainer>
)

export default Header
