import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectBanner from '../components/ProjectBanner';
import InternalImage from '../images/prepress-demo.mp4';

const Main = styled.main`
  min-height: 100vh;
  background: #f6f9fc;
`;

const Article = styled.article`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 70px 20px;
  color: #4a4a4a;

  & p {
    line-height: 2em;
    margin-bottom: 40px;
  }

  & img {
    width: 100%;
    border-radius: 6px;
  }

  & ul {
    margin-bottom: 40px;
  }

  & video {
    width: 100%;
    border-radius: 6px;
  }
`;

const MmtPage = props => (
  <Layout>
    <SEO title="Prepress App" />
    <Main>
      <ProjectBanner
        github="https://github.com/sams-joseph/prepress-app"
        heading="Technologies"
        techs={['Electron', 'React']}
      >
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </ProjectBanner>
      <Article>
        <p>
          The prepress department at MMT needed a way to automate the
          duplication of old orders into new orders. This app fulfilled that
          need.
        </p>
        <h4>Features Include</h4>
        <ul>
          <li>
            The ability to duplicate directory, and file structure with the new
            appropriate naming conventions
          </li>
          <li>
            Archive artwork files and directories to reset original folder
            structure of server for reworking.
          </li>
          <li>
            Track history of both rename and reset features through the use of a
            database available to all desktop applications.
          </li>
          <li>
            Search PACE MIS system retrieving order information and displaying
            it for easy access.
          </li>
        </ul>
        <p>
          Built using Github's Electron framework in combination with React for
          the UI. This application has been used to increase efficiency of the
          department and remove areas of possible human error renaming over 1000
          orders so far.
        </p>

        <video src={InternalImage} controls />
      </Article>
    </Main>
  </Layout>
);

export default MmtPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "prepress-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
