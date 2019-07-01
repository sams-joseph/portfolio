import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Contact from '../components/Contact';

import rocketImage from '../images/rocket-illustration.svg';
import thinkImage from '../images/think-illustration.svg';
import skillsImage from '../images/skills-illustration.svg';

import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: ${props => (props.padding ? props.padding : '0 30px')};
  margin: 0 auto;
  flex-wrap: wrap;
  display: ${props => (props.flex ? 'flex' : 'block')};

  @media (min-width: 640px) {
    max-width: 768px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const Column = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${props => (props.order ? 'order:' + props.order + ';' : 'order: initial;')}

  @media (min-width: 640px) {
    width: 50%;
    padding: 40px 30px;
    order: initial;

    &:first-child {
      padding: 40px 30px 40px 0;
    }
    &:last-child {
      padding: 40px 0 40px 30px;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 70px 70px;

    &:first-child {
      padding: 70px 70px 70px 0;
    }
    &:last-child {
      padding: 70px 0 70px 70px;
    }
  }
`;

const Heading = styled.h2`
  color: #4a4a4a;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Subheading = styled.span`
  display: block;
  color: #4a4a4a;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0 0 30px 0;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Body = styled.p`
  color: #7e7e7e;
  font-size: 1rem;
  line-height: 28px;
  font-weight: 400;
  margin: 0 0 30px 0;
`;

const Underscore = styled.div`
  width: 50px;
  height: 5px;
  background: #0099f9;
  margin-bottom: 20px;
  ${props => (props.center ? 'margin: 0 auto' : '')}
`;

const Bkg = styled.svg`
  width: 100%;
  position: absolute;
  ${props => (props.bottom ? 'bottom: 0;' : '')}
  ${props => (props.top ? 'top: 0;' : '')}
  z-index: ${props => (props.z ? props.z : '-1')};
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.ul`
  margin: 0;
  padding: 10px 20px;
`;

const Item = styled.li`
  list-style: square;
  color: #7e7e7e;
  font-size: 1rem;
  line-height: 28px;
  font-weight: 400;
  margin: 0;
`;

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <img src={rocketImage} alt="Rocket Blasting Off" />
    </Hero>
    <main style={{ paddingTop: '40px' }}>
      <div style={{ position: 'relative' }}>
        <Bkg bottom viewBox="0 0 1488 211.92">
          <path
            d="M1088,175.92c-272-6-352-130-606-168-203.2-30.4-406,34-482,70v134H1488v-174C1445.33,85.92,1305.6,180.72,1088,175.92Z"
            fill="#f6f9fc"
          />
        </Bkg>
        <Container flex>
          <Column>
            <img width="100%" src={thinkImage} alt="Think Illustration" />
          </Column>
          <Column>
            <Heading>About Me</Heading>
            <Subheading>I build stuff for the web</Subheading>
            <Underscore />
            <Body>
              I am a passionate developer and I love Javascript and the
              environment around it. I creatively solve problems using
              programming everyday. I bring a keen eye for design and an
              attention to detail that can bring any idea to life. From concept
              to finished product I can help you every step of the way.
            </Body>
          </Column>
        </Container>
      </div>
      <div style={{ background: '#f6f9fc' }}>
        <Container flex>
          <Column>
            <Heading>Skillset</Heading>
            <Subheading>Responsive & Maintainable</Subheading>
            <Underscore />
            <List>
              <Item>HTML, CSS, and Javascript</Item>
              <Item>NodeJS</Item>
              <Item>ReactJS, VueJS</Item>
              <Item>PHP, Laravel</Item>
              <Item>Docker</Item>
              <Item>GIT</Item>
              <Item>PostgreSQL</Item>
              <Item>Adobe Suite</Item>
            </List>
          </Column>
          <Column order="-1">
            <img width="100%" src={skillsImage} alt="Skills Illustration" />
          </Column>
        </Container>
      </div>
      <Contact></Contact>
      <div
        style={{
          background: '#f6f9fc',
          position: 'relative',
        }}
      >
        <Container id="projects" padding="0 20px">
          <div style={{ padding: '70px 0' }}>
            <Heading center>Web Projects</Heading>
            <Subheading center>Making the web a better place</Subheading>
            <Underscore center />
          </div>
          <ProjectContainer>
            <Project
              title="Metromedia Technologies"
              body="MMT.com needed a facelift. Re-designing a non-responsive, 10 year old, PHP site into a responsive static website. The goal of this page was to create a serverless site that could be hosted without the need of any backend."
              url="/mmt-com"
            >
              <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </Project>
            <Project
              title="Prepress Application"
              body="The prepress department at MMT needed a way to automate the duplication of old orders into new orders. This app fulfilled that need. Built using Electron and ReactJS."
              url="/prepress"
            >
              <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </Project>
            <Project
              title="Sepsis Foundation"
              body="The Sepsis Portal was created to allow for customers to choose from a pre-selected list of design/size combinations and customize them with a name, date, and portrait image. Once created the design is added to your cart and can be added to until ready to checkout."
              url="/sepsis-awareness"
            >
              <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </Project>
          </ProjectContainer>

          <div style={{ padding: '70px 0' }}>
            <Heading center>Design Projects</Heading>
            <Subheading center>Spreading the message</Subheading>
            <Underscore center />
          </div>
          <ProjectContainer>
            <Project
              title="VISEN Brochure"
              body="Multipage brochure for the launch of Metromedia Technologies' new lighting product VISEN."
              url="/visen-brochure"
            >
              <Img fluid={props.data.visenImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Sports & Events Booklet"
              body="Multipage booklet outlining the successful application of Metromedia Technologies' product in the sporting event field."
              url="/sporting-events"
            >
              <Img fluid={props.data.sportingImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Website Promotional"
              body="Email blast for the launch of Metromedia Technologies' Online Ordering Platform."
              url="/orders-portal"
            >
              <Img fluid={props.data.ordersImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Boxing Promotional"
              body="Email blast with the intent of branching out into a new market for Metromedia Technologies print product."
              url="/boxing-promo"
            >
              <Img fluid={props.data.boxingImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Sell Sheet"
              body="Reusable brief case-study template. These are used to outline successful projects completed in the field."
              url="/sellsheet"
            >
              <Img fluid={props.data.sellSheetImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Event Invitation"
              body="Invitaion for a special demonstration of a new product release."
              url="/invitation"
            >
              <Img fluid={props.data.invitationImage.childImageSharp.fluid} />
            </Project>
            <Project
              title="Vista Water"
              body="Logo and colorway design for Vista Water."
              url="/vista-water"
            >
              <Img fluid={props.data.vistaImage.childImageSharp.fluid} />
            </Project>
          </ProjectContainer>
        </Container>
      </div>
    </main>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "mmt-com-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "prepress-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "sepsis-com-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImage: file(relativePath: { eq: "rocket-illustration.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visenImage: file(relativePath: { eq: "visen-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sportingImage: file(relativePath: { eq: "sports-events-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ordersImage: file(relativePath: { eq: "orders-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxingImage: file(relativePath: { eq: "fight-night-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sellSheetImage: file(relativePath: { eq: "sellsheet-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    invitationImage: file(relativePath: { eq: "invitation-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    howardImage: file(relativePath: { eq: "howard-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vistaImage: file(relativePath: { eq: "vista-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
