import styled from 'styled-components';
import Link from 'gatsby-link';

export const ProjectContainer = styled.div`
  flex: 1 1 33%;
  padding: 0 2px;
  min-width: 300px;
  margin-bottom: 5px;
`;

export const Card = styled(Link)`
  color: white;
  display: block;
  height: 100%;
  border: 1px solid rgba(232, 80, 52, 0.25);
  background: rgba(232, 80, 52, 0.5);
  transition: all 0.25s;

  &:hover {
    border: 1px solid rgba(232, 80, 52, 1);
    background: rgba(232, 80, 52, 0.5);
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
