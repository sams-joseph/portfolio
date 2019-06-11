import styled from "styled-components"

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  min-height: 300px;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
  overflow: hidden;
`

export const Container = styled.div`
  width: 100%;
  padding: ${props => (props.padding ? props.padding : "0 30px")};
  margin: 0 auto;
  flex-wrap: wrap;
  display: ${props => (props.flex ? "flex" : "block")};
  padding-bottom: 300px;

  @media (min-width: 640px) {
    max-width: 768px;
    padding: ${props => (props.padding ? props.padding : "0 30px")};
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

export const Bkg = styled.svg`
  width: 100%;
  position: absolute;
  ${props => (props.bottom ? "bottom: 0;" : "")}
  ${props => (props.top ? "top: -1px;" : "")}
  z-index: ${props => (props.z ? props.z : "-1")};
`

export const Img = styled.img`
  height: 300px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 100px;
`

export const Heading = styled.h2`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 5px 0;
  text-align: ${props => (props.center ? "center" : "left")};
`

export const Body = styled.p`
  color: #f6f9fc;
  font-size: 1rem;
  line-height: 28px;
  margin-bottom: 70px;

  a {
    color: white;
  }

  @media (min-width: 640px) {
    margin-bottom: 0;
    max-width: 300px;
  }
`
