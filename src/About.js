import React from "react";
import { Card, Container, Header, Icon, Input } from "semantic-ui-react";

import Footer from "./Footer";

import "./About.css";

const members = [
  {
    header: "Dan Haas",
    meta: "Copake, NY",
    description:
      "Retired Teacher, Board Member of Harlem Valley Rail Trail, Copake Climate Smart Coordinator",
  },
  {
    header: "Juan-Pablo Velez",
    description: "Software Engineer, Climate Activist",
    meta: "Copake, NY",
  },
  {
    header: "Eli Geminder",
    description: "Metalwork Designer",
    meta: "Copake Falls, NY",
  },
  {
    header: "Peggy Lewis",
    description: "Retired School Counselor",
    meta: "Copake, NY",
  },
  {
    header: "Gary Lewis",
    description: "Corporate Attorney",
    meta: "Copake, NY",
  },
  {
    header: "Roxann Slate",
    description: "Glass Artisan",
    meta: "Copake Falls, NY",
  },
  {
    header: "Sandra Baptie",
    description: "Architect",
    meta: "Copake, NY",
  },
  {
    header: "Lawrence Linder",
    description: "Architect",
    meta: "Copake, NY",
  },
  {
    header: "Alexa Knight",
    description: "Researcher and Strategist",
    meta: "Ancram, NY",
  },
  {
    header: "David Grubin",
    description: "Filmmaker",
    meta: "Hillsdale, NY",
  },
  {
    header: "Joan Grubin",
    description: "Artist",
    meta: "Hillsdale, NY",
  },
  {
    header: "Gary Siegel",
    description: "Environmental Engineer",
    meta: "Copake, NY",
  },
  {
    header: "Marc Gross",
    description: "Attorney",
    meta: "West Copake, NY",
  },
  {
    header: "Harry Hussey",
    description: "Data guy, Musician",
    meta: "Copake, NY",
  },
  {
    header: "Leslie Wood",
    meta: "Copake Falls, NY",
  },
  {
    header: "Elayne Dix",
    meta: "Copake, NY",
  },
  {
    header: "Erin Shaw",
    meta: "Copake, NY",
  },
  {
    header: "Amanda Pickering",
    meta: "Copake, NY",
  },
  {
    header: "Steve Passage",
    meta: "West Copake, NY",
  },
  {
    header: "Alice Platt",
    meta: "Taghkanic, NY",
  },
  {
    header: "Tom Walsh",
    meta: "Copake, NY",
  },
  // {
  //   header: "Julia Pearson",
  //   meta: "Chatham, NY",
  // },
];

function About() {
  return (
    <>
      <Container>
        <Header as="h2" size="huge">
          Who’s behind this?
        </Header>
        <p>
          We are your neighbors, active members of our community. Sometimes we
          are asked, “Why do you support Shepherd’s Run?” To find out, read some
          of OUR STORIES:
        </p>
        <p>
          <a href="/#/harry">HARRY HUSSEY,{" "}</a>leader of Open Mic nights at the Copake Grange
        </p>
        <p>
          <a href="/#/dan">DAN HAAS,{" "}</a>Copake Climate Smart Task Forces
        </p>
        <p>
          <a href="/#/elayne">ELAYNE DIX,{" "}</a>longtime resident
        </p>
        <p>
          <a href="/#/gary">GARY LEWIS,{' '}</a>Route Master for the Roe Jan Ramble
        </p>
        <br />
  
        <Header as="h3" size="large">
        These organizations are our allies:
        </Header>
        <div className="allies">
          <a href="https://nyforcleanpower.org/">
            <img
              alt="New Yorkers for Clean Power"
              src="https://nyforcleanpower.org/wp-content/uploads/2018/04/340x200-NYfCP-Logo-1.png"
            />
          </a>
          <a href="https://www.nyrenews.org/">
            <img
              alt="NY Renews"
              src="https://images.squarespace-cdn.com/content/v1/58ae35fddb29d6acd5d7f35c/1620837476925-FY2F02WMWZVBNG1QJTFC/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/NYRenews-logo-green+%281%29+%281%29.png?format=1000w"
            />
          </a>
          <a href="https://www.climate.win/">
            <img
              alt="Win Climate"
              src="https://climate.win/assets/images/image01.png?v=69407838"
            />
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default About;
