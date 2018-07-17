import styled from 'styled-components';
import Link from 'gatsby-link';
import heroImage from './img/hero-image.jpg';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  ${({ flex }) => flex && 'display: flex'};
  ${({ center }) => center && 'align-items: center'};
  ${({ fullHeight }) => fullHeight && 'height: 100%'};
  flex-wrap: wrap;
`;

export const HeroContainer = styled.section`
  height: 40vw;
  max-height: 700px;
  position: relative;
  overflow: hidden;

  @media (max-width: 950px) {
    max-height: 1200px;
    height: 74vw;
  }
  @media (max-width: 625px) {
    max-height: 1200px;
    height: 100vh;
  }
`;

export const HeroBkg = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  background-image: linear-gradient(
      135deg,
      rgba(52, 232, 158, 0.85),
      rgba(15, 52, 67, 1)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Lockup = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Name = styled.h3`
  color: white;
  font-weight: 300;
  font-size: 2.25em;
  padding: 0;
  margin: 0;

  @media (max-width: 625px) {
    font-size: 1.5em;
  }
`;

export const Heading = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 3em;
  padding: 0;
  margin: 0;

  @media (max-width: 625px) {
    font-size: 1.5em;
  }
`;

export const Emphasis = styled.h2`
  color: #0b2833;
  font-weight: 900;
  font-size: 4em;
  padding: 0;
  margin: 0 0 40px 0;

  @media (max-width: 625px) {
    font-size: 1.5em;
  }
`;

export const Button = styled(Link)`
  color: white;
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #e85034;
  background: rgba(232, 80, 52, 0.75);
  transition: background-color 0.25s;
  box-shadow: 0 0 6px rgba(11, 40, 51, 0.5);
  border-radius: 3px;

  &:hover {
    background: rgba(232, 80, 52, 1);
  }
`;
