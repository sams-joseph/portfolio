import styled from "styled-components"

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background: #0099f9;
  overflow: hidden;
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 30px;

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

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px 15px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  right: 0;
  background: #3dcf8e;
  color: white;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.85rem;

  &:focus {
    outline: none;
  }
`

export const InputGroup = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`

export const Heading = styled.h2`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 auto 40px auto;
  max-width: 350px;
  text-align: center;
`
