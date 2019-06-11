import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 50;
  width: 100%;
`

export const Container = styled.nav`
  width: 100%;
  padding: 20px 30px;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 768px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`
