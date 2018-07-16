import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import Project from '../components/Project';

import mmtComCover from './img/mmt-com-cover.jpg';
import sepsisComCover from './img/sepsis-com-cover.jpg';
import prepressCover from './img/prepress-cover.jpg';

const IndexPage = ({ data }) => (
  <main>
    <Hero posts={data.allMarkdownRemark.edges} />

    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          padding: '10px 5px 5px 5px',
          flexWrap: 'wrap',
        }}
      >
        <Project
          img={prepressCover}
          title="Prepress Application"
          description="Mac OSX app for automating functions, searching MIS system, and tracking previous autmated history"
          slug="page-slug"
        />
        <Project
          img={mmtComCover}
          title="Metromedia Technologies"
          description="Main Webpage for Metromedia Technologies."
          slug="mmt-com"
        />
        <Project
          img={sepsisComCover}
          title="Sepsis Awareness"
          description="Online ordering portal to design, order, and track billboards for Sepsis Awareness."
          slug="page-slug"
        />
      </div>
    </div>
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 1 sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`