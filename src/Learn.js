import React from "react";
import { Accordion, Container, Header, Segment } from "semantic-ui-react";

import Footer from "./Footer";
import { FACTS, REASONS } from "./research";

import "./Learn.css";

const factsPanels = FACTS.map((f, i) => ({ ...f, key: i }));
const reasonPanels = REASONS.map((f, i) => ({ ...f, key: i }));

const Learn = () => (
  <>
    <Container className="Learn">
      <Header as="h2">🙋 But wait, won’t all those panels . . .</Header>
      <Accordion panels={factsPanels} />
    </Container>
    <br/><br/>
    <Container className="Why">
      <Header as="h2">🤔 But can’t we instead . . .</Header>
      <Accordion panels={reasonPanels} />
      <br/><br/>
      <Segment>
        <p>
          <b>Note</b>: to comply with New York State regulations, 
          Hecate is studying how the solar farm will affect agriculture, wildlife, 
          property values, and dozens of other topics. 
        </p>
        <p>
          The studies will be published this summer. We'll now much more then. 
        </p>
        <p>
          For now, we provide evidence from academic studies, other solar 
          projects, and local community knowledge.
        </p>
      </Segment>
    </Container>
    <Footer />
  </>
);

export default Learn;
