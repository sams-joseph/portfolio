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

export const HeaderContainer = styled.header`
  width: 100%;
  ${({ show }) =>
    show
      ? `
          background: rgba(11, 40, 51, 0.9);
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.5);
          height: 55px;
        `
      : `
          background: rgba(11, 40, 51, 0);
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0);
          height: 65px;
        `} display: flex;
  position: fixed;
  z-index: 2;
  transition: all 0.5s;
`;

export const Logo = styled.img`
  ${({ show }) => (show ? `height: 30px;` : `height: 40px;`)};
  transition: all 0.5s;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;

  & ul {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style-type: none;
  }

  & li {
    height: calc(100% - 2px);
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: all 0.25s;

    &:hover {
      border-bottom: 2px solid white;
      ${({ show }) =>
    show
      ? `border-bottom: 2px solid white`
      : `border-bottom: 2px solid white`};
    }
  }

  & a {
    display: block;
    color: white;
    ${({ show }) =>
    show ? `line-height: 55px;` : `line-height: 65px;`} font-size: 14px;
    transition: all 0.5s;

    &:hover {
      text-decoration: none;
    }
  }
`;
