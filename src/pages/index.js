import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero';
import Project from '../components/Project';

import mmtComCover from './img/mmt-com-cover.jpg';
import sepsisComCover from './img/sepsis-com-cover.jpg';
import prepressCover from './img/prepress-cover.jpg';

const SectionHeading = styled.h2`
  color: white;
  padding: 0 0 0 10px;
  margin: 0 0 10px 0;
  font-weight: 300;
  font-size: 20px;
`;

const SkillsContainer = styled.section`
  width: 100%;
  padding: 70px 0;
  background: #0b2833;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 840px;
  padding: 0 20px;
  margin: 0 auto;

  & h2 {
    font-weight: 300;
    margin: 0;
    margin: 0 0 20px 0;
  }

  & h3 {
    font-weight: 400;
    color: rgb(52, 232, 158);
    padding: 0;
    margin: 0 0 10px 0;
  }

  & h4 {
    padding: 0;
    margin: 0 0 10px 0;
  }

  & p {
    line-height: 2em;
    margin-bottom: 40px;
  }

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0 40px 0;

    & li {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 10px;
      background: white;
      color: #0b2833;
    }
  }
`;

const IndexPage = () => (
  <main>
    <Hero />

    <div style={{ width: '100%', padding: '30px 10px' }}>
      <SectionHeading>Recent Projects</SectionHeading>
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
          slug="prepress"
          github="https://github.com/sams-joseph/prepress-app"
        />
        <Project
          img={mmtComCover}
          title="Metromedia Technologies"
          description="Main Webpage for Metromedia Technologies."
          slug="mmt-com"
          github="https://github.com/metromedia-technologies/mmt-redesign"
          url="https://www.mmt.com"
        />
        <Project
          img={sepsisComCover}
          title="Sepsis Awareness"
          description="Online ordering portal to design, order, and track billboards for Sepsis Awareness."
          slug="sepsis-awareness"
          github="https://github.com/sams-joseph/sa-web"
          url="http://sepsis.mmt.com"
        />
      </div>
    </div>
    <SkillsContainer>
      <Container>
        <h2>Experience</h2>
        <h3>Metromedia Technologies - August 2010 - Present</h3>
        <h4>Prepress Manager</h4>
        <p>
          Planned and implemented new software that automated the Prepress
          workflow. Created javascript programs that automated function of the
          Adobe Creative Suite removing manual touches and increased
          productivity of the department. Created Mac OSX desktop application to
          handle and manipulate production files in the prepress workflow.
          Designed, coded, and deployed the new web presence of MMT. Developed
          and maintained web applications used by customers to design and submit
          orders for printed billboards.
        </p>

        <h2>Skillset</h2>
        <ul>
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>PostgreSQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT</li>
          <li>Docker</li>
          <li>Adobe Creative Suite</li>
          <li>Figma</li>
        </ul>

        <h2>Education</h2>
        <h3>Mount Union University 2010</h3>
        <h4>Bachelors Degree Media Computing</h4>
        <h4>Minor Information Systems</h4>
      </Container>
    </SkillsContainer>
  </main>
);

export default IndexPage;
