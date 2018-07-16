import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import Project from '../components/Project';
import { Container } from '../Components/GlobalStyles';

import mmtComCover from './img/mmt-com-cover.jpg';
import sepsisComCover from './img/sepsis-com-cover.jpg';
import prepressCover from './img/prepress-cover.jpg';

const IndexPage = () => (
  <main>
    <Hero />

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
          img={mmtComCover}
          title="Metromedia Technologies"
          description="Main Webpage for Metromedia Technologies."
          slug="page-slug"
        />
        <Project
          img={sepsisComCover}
          title="Sepsis Awareness"
          description="Online ordering portal to design, order, and track billboards for Sepsis Awareness."
          slug="page-slug"
        />
        <Project
          img={prepressCover}
          title="Prepress Application"
          description="Mac OSX app for automating functions, searching MIS system, and tracking previous autmated history"
          slug="page-slug"
        />
      </div>
    </div>
  </main>
);

export default IndexPage;
