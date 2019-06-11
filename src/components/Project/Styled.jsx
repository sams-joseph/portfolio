import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  z-index: 1;
  margin-bottom: 70px;

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 225px;
  margin-bottom: 30px;
  border-radius: 6px 6px 0 0;
`

export const Heading = styled.h3`
  color: #4a4a4a;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 20px 0;
`

export const Body = styled.p`
  color: #7e7e7e;
  font-size: 0.85rem;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px 0;
`

export const ViewLink = styled(Link)`
  color: #0099f9;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`
