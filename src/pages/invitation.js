import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectBanner from '../components/ProjectBanner';

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
`;

const MmtPage = props => (
  <Layout>
    <SEO title="Event Invitation" />
    <Main>
      <ProjectBanner heading="">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </ProjectBanner>
      <Article>
        <p>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </p>
      </Article>
    </Main>
  </Layout>
);

export default MmtPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "invitation-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "invitation-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
