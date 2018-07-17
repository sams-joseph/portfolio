import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import constants from '../constants';

injectGlobal([
  `
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,900');
  * {
    box-sizing: border-box;
  }
  body {
    // background-color: #0B2833;
    background-color: #111111;
    margin: 0;
    font-family: ${constants.fontFamily};
    min-height: 100vh;
  }
  #root {
    height: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: white;
    color: ${constants.primaryTextColor};
  }
  a {
    color: ${constants.defaultPrimaryColor};
    text-decoration: none;
  }
  .fade-enter {
    transform: translateX(-30px);
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  .fade-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transform: translateX(-30px);
    transition: opacity 300ms ease-out, transform 300ms ease-out;
  }
  `,
]);

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Joseph Sams - Web Developer, Application Developer, Frontend Developer',
        },
        {
          name: 'keywords',
          content: 'Developer, Javascript, Nodejs, React, Web developer',
        },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
