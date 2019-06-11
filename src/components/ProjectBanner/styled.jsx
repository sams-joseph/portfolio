import styled from "styled-components"
import { Link } from "gatsby"

export const ProjectBannerContainer = styled.section`
  width: 100%;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
  min-height: 400px;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  ${({ flex }) => flex && "display: flex"};
  ${({ center }) => center && "align-items: center"};
  ${({ fullHeight }) => fullHeight && "height: 100%"};
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex: 1 50%;
  height: 400px;
  overflow: hidden;
  padding: 100px 0 0 0;

  & img {
    width: 100%;
    border-radius: 6px;
  }

  @media (max-width: 870px) {
    flex: 1 100%;

    &:first-child {
      order: 2;
      padding: 40px 0 0 0;
    }

    &:nth-child(2) {
      height: auto;
    }
  }

  @media (max-width: 530px) {
    &:first-child {
      height: 300px;
      padding: 40px 0 0 0;
    }
  }

  @media (max-width: 400px) {
    &:first-child {
      height: 250px;
      padding: 40px 0 0 0;
    }
  }
`

export const Heading = styled.h4`
  font-size: 20px;
  padding: 0;
  margin: 0 40px 20px 40px;
  font-weight: 400;
  color: white;

  @media (max-width: 870px) {
    margin: 0 0 20px 0;
  }
`

export const List = styled.ul`
  list-style-type: none;
  color: white;
  margin: 0 40px 10px 40px;
  padding: 0;

  & li {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid white;
    padding: 10px;
  }

  @media (max-width: 870px) {
    margin: 0 0 20px 0;
  }
`

export const Button = styled.a`
  display: inline-block;
  margin: 0 0 20px 40px;
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

  @media (max-width: 870px) {
    margin: 0 10px 20px 0;
  }
`

export const Nav = styled.nav`
  width: 100%;
  background: #ECF0F4;
  border-bottom: 1px solid #DFE4EA;
`

export const NavLink = styled(Link)`
  display: inline-block;
  padding: 30px 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.85rem;
  color: #4a4a4a;
  border-right: 1px solid #DFE4EA;
  transition: background 0.125s;

  &:hover {
    background: #DFE4EA;
  }
`
