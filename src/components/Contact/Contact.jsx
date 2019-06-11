import React from "react"

import {
  Wrapper,
  Container,
  Button,
  Input,
  InputGroup,
  Heading,
} from "./styled"

const Contact = () => (
  <Wrapper>
    <Container padding="100px 30px 0 30px">
      <Heading>Want to get in touch? Drop your email below.</Heading>
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <InputGroup>
          <Input
            type="text"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <Button type="submit">Submit</Button>
        </InputGroup>
      </form>
    </Container>
  </Wrapper>
)

export default Contact
