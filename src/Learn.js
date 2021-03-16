import React from "react";
import { Accordion, Container, Header, Segment } from "semantic-ui-react";

import Footer from "./Footer";
import { FACTS, REASONS } from "./research";

import "./Learn.css";

const factsPanels = FACTS.map((f, i) => ({ ...f, key: i }));
const reasonPanels = REASONS.map((f, i) => ({ ...f, key: i }));

const Learn = () => (
  <>
    <Container>
    </Container>
    <Container text className="Learn">
      <Header as="h2">🙋 But wait, won’t all those panels . . .</Header>
      <Segment>
        <p>
          <b>A note on project impacts</b>: to comply with New York state regulations, 
          Hecate is studying how the solar farm will affect local agriculture, birds, 
          water quality, property values, and dozens of other topics. 
        </p>
        <p>
          The studies are ongoing, and expected to be published this summer. 
          We’ll know a lot more about the project’s impact then, and this page 
          will be updated accordingly.
        </p>
        <p>
          Until then, this page is based on academic studies, evidence from other solar 
          projects, and local knowledge about the community.
        </p>
      </Segment>
      <Accordion panels={factsPanels} />
    </Container>
    <Container text className="Learn">
      <Header as="h2">🤔 But can’t we instead . . .</Header>
      <Accordion panels={reasonPanels} />
    </Container>
    <Footer />
  </>
);

export default Learn;
