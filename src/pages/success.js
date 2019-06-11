import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import successImage from "../images/success-illustration.svg"

import "normalize.css"
import "../components/layout.css"

import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 30px;
`

const Img = styled.img`
  margin-bottom: 40px;
`

const Heading = styled.h2`
  color: #4a4a4a;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  max-width: 350px;
  text-align: center;
`

const Body = styled.p`
  color: #7e7e7e;
  font-size: 0.85rem;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px 0;
`

const Button = styled(Link)`
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

export default () => (
  <Container>
    <SEO title="Success" />
    <Img src={successImage} alt="Success" />
    <Heading>Thank you!</Heading>
    <Body>Your email has been submitted successfully.</Body>
    <Button to="/">Back Home</Button>
  </Container>
)
