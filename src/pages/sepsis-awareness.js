import React from 'react';
import styled from 'styled-components';

import ProjectBanner from '../components/ProjectBanner';
import FeatureImage from './img/sepsis-com-cover.jpg';
import InternalImage from './img/sepsis-demo.mp4';

const Main = styled.main`
  min-height: 100vh;
  background: #f8f8f8;
`;

const Article = styled.article`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 70px 20px;
  color: #0b2833;

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

const MmtPage = () => (
  <Main>
    <ProjectBanner
      featureImage={FeatureImage}
      url="http://sepsis.mmt.com"
      github="https://github.com/sams-joseph/sa-web"
      techs={[
        'React',
        'Nodejs',
        'Postgres',
        'Docker',
        'Konva',
        'Recharts',
        'NGINX',
      ]}
    />
    <Article>
      <p>
        Sepsis Awareness is a non profit that produces billboard campaigns to
        help raise awareness for Sepsis. MMT helps in printing those billboards.
        The Sepsis Portal was created to allow for customers to choose from a
        pre-selected list of design/size combinations and customize them with a
        name, date, and portrait image. Once created the design is added to your
        cart and can be added to until ready to checkout.
      </p>
      <h4>Features Include</h4>
      <ul>
        <li>
          Dashboard with an overview of recent orders, analytics and order
          history.
        </li>
        <li>
          Full order history that can be searched. Searching queries both the
          name and date fields in a Postgres database and returns 5 most recent
          results that are paginated and can be cycled through.
        </li>
        <li>Customizable design utilizing the Konva library.</li>
        <li>Order notifications through email.</li>
        <li>
          Admin functionalities to create users, CSRs, Designs, and Layouts.
        </li>
      </ul>
      <p>
        The backend was built with Nodejs as a RESTful API. JSON Webtokens are
        used for authorization on requests. The API connects to a Postgres
        database utilizing the Sequelize ORM. The frontend was created using
        React to consume the API. An NGINX web server serves the UI and proxies
        all requests to the backend API where applicable. All of this is housed
        in multiple Docker containers to allow for and easy development to
        production workflow.
      </p>

      <video src={InternalImage} controls />
    </Article>
  </Main>
);

export default MmtPage;
