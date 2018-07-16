import styled from 'styled-components';
import Link from 'gatsby-link';

export const ProjectContainer = styled.div`
  flex: 1 1 33%;
  padding: 0 5px;
  min-width: 300px;
  margin-bottom: 10px;
`;

export const Card = styled.div`
  color: white;
  display: block;
  background: #0B2833;
  transition: all 0.25s;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
`;

export const Meta = styled.div`
  padding: 10px;
`;

export const Image = styled.div`
  height: 20vw;
  max-height: 400px;
  min-height: 200px;
  ${({ img }) => img && `background: url(${img})`};
  background-posiiton: center;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;
  padding: 0;
  margin: 0 0 7px 0;
`;

export const Links = styled.div`
  & img {
    height: 16px;
    margin-right: 10px;
  }
`;