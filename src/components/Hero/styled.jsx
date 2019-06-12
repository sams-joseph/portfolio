import styled from "styled-components"
import { Link } from "gatsby"

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  max-height: 960px;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);

  @media (min-width: 768px) {
    height: 64vw;
    max-height: 800px;
    background-position: top center;
  }
`

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 20px 0 20px;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  display: ${props => (props.flex ? "flex" : "block")};

  @media (min-width: 640px) {
    max-width: 768px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 140px 30px 0 30px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const HeroContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 150px;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }

  span {
    font-family: "Yellowtail", cursive;
    font-size: 1.5rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    opacity: 0.9;
    font-size: 1rem;
    font-weight: 300;
    line-height: 28px;
    max-width: 375px;
    padding-bottom: 40px;
  }
`

export const HeroImage = styled.div`
  width: 95%;
  padding-bottom: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    order: initial;
    padding-bottom: 0;
  }

  img {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
    float: right;
  }

  @media (min-width: 640px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 65%;
  }
`

export const Wave = styled.svg`
  width: 100%;
  position: absolute;
  bottom: -2px;
`

export const Button = styled(Link)`
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  background: #3ecf8e;
  border-radius: 3px;
  padding: 10px 14px;
  transition: all 0.125s;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`
