import React, { Component } from 'react';
import Link from 'gatsby-link';

import { HeaderContainer, Nav, Logo, Wrapper } from './Styled';
import logoimage from './img/logo1x.svg';

class Header extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (window.scrollY > 75) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  render() {
    const { show } = this.state;
    return (
      <HeaderContainer show={show}>
        <Wrapper flex center>
          <Link to="/">
            <Logo src={logoimage} alt="Joseph Sams" show={show} />
          </Link>
          <div style={{ flex: 1 }} />
          <Nav show={show}>
            <ul>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </HeaderContainer>
    );
  }
}

export default Header;
