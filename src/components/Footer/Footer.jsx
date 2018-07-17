import React from 'react';
import { FooterContainer } from './Styled';
import github from './img/github.svg';

function Footer() {
  return (
    <FooterContainer>
      <a href="https://github.com/sams-joseph">
        <img src={github} alt="Github Link" />
      </a>
    </FooterContainer>
  );
}

export default Footer;
