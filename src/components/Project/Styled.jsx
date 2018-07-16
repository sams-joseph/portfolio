import styled from 'styled-components';
import Link from 'gatsby-link';

export const ProjectContainer = styled.div`
  flex: 1 1 33%;
  padding: 0 5px;
  min-width: 300px;
  margin-bottom: 10px;
`;

export const Card = styled.a`
  color: white;
  display: block;
  height: 100%;
  background: rgba(232, 80, 52, 1);
  transition: all 0.25s;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;

  &:hover {
    background: rgba(232, 80, 52, 0.95);
    transform: scale(1.01);
  }
`;

export const Meta = styled.div`
  padding: 20px;
`;

export const Image = styled.div`
  height: 20vw;
  max-height: 400px;
  min-height: 200px;
  ${({ img }) => img && `background: url(${img})`};
  background-posiiton: center;
  background-size: cover;
`;
