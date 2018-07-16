import styled from 'styled-components';

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
