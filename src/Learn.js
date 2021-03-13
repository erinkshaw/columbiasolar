import React from "react";
import { Accordion, Container, Header, Segment } from "semantic-ui-react";

import Footer from "./Footer";
import { FACTS, REASONS } from "./research";

import "./Learn.css";

const factsPanels = FACTS.map((f, i) => ({ ...f, key: i }));
const reasonPanels = REASONS.map((f, i) => ({ ...f, key: i }));

const Learn = () => (
  <>
    <Container text className="Learn">
      <Header as="h2">🙋 But wait, won’t all those panels . . .*</Header>
      <Accordion panels={factsPanels} />
    </Container>
    <Container text className="Why">
      <Header as="h2">🤔 But can’t we instead . . .</Header>
      <Accordion panels={reasonPanels} />
    </Container>
    <Container>
    <Segment>
        <p>
          *A note on project impacts: to comply with New York state regulations,
          Hecate is studying how the solar farm will affect local agriculture,
          birds, water quality, property values, and dozens of other topics.
        </p>
        <p>
          The studies are happening now, and are expected to be published by the
          summer. We’ll know a lot more about the project’s impact then, and this
          page will be updated accordingly.
        </p>
        <p>
          For now, the arguments we make below about how Shepherd’s Runs will
          affect Copake are based on evidence from other solar projects, academic
          studies, and local knowledge about the proposed project area.
        </p>
      </Segment>
    </Container>
    <Footer />
  </>
);

export default Learn;
