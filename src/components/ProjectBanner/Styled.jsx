import styled from 'styled-components';

export const ProjectBannerContainer = styled.section`
  width: 100%;
  background-image: linear-gradient(
    135deg,
    rgba(52, 232, 158, 1),
    rgba(15, 52, 67, 1)
  );
  min-height: 400px;
`;

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
`;

export const Heading = styled.h4`
  font-size: 20px;
  padding: 0;
  margin: 0 40px 20px 40px;
  font-weight: 400;
  color: white;

  @media (max-width: 870px) {
    margin: 0 0 20px 0;
  }
`;

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
`;

export const Button = styled.a`
  margin: 0 0 20px 40px;
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

  @media (max-width: 870px) {
    margin: 0 10px 20px 0;
  }
`;
