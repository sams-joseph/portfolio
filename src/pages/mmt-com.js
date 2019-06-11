import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectBanner from "../components/ProjectBanner"
import FeatureImage from "../images/mmt-com-feature.jpg"
import InternalImage from "../images/mmt-com-internal.jpg"

const Main = styled.main`
  min-height: 100vh;
  background: #f6f9fc;
`

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
`

const MmtPage = () => (
  <Layout>
    <SEO title="MMT Homepage" />
    <Main>
      <ProjectBanner
        featureImage={FeatureImage}
        url="https://www.mmt.com"
        techs={["Jekyll", "Sass", "Webpack"]}
        github="https://github.com/metromedia-technologies/mmt-redesign"
      />
      <Article>
        <p>
          MMT.com needed a facelift. Re-designing a non-responsive, 10 year old,
          PHP site into a responsive static website. The goal of this page was
          to create a serverless site that could be hosted without the need of
          any backend. I chose Jekyll due to its ease of use, incorporated Sass
          as my go to styling syntax and used Webpack to chunk my JS files to
          reduce page load. I tried to adhere to a BEM naming convention and
          model for my styling.
        </p>
        <p>
          Designed and coded from the ground up this project utilized a wide
          array of my skillset. Going from wireframe design to content creation
          to end product allowed for a satisfied client.
        </p>

        <img src={InternalImage} alt="MMT Page" />
      </Article>
    </Main>
  </Layout>
)

export default MmtPage
