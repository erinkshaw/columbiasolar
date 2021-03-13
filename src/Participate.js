import React from "react";
import { Container, Header, Input, Step } from "semantic-ui-react";

import Footer from "./Footer";

export default function Participate() {
  return (
    <>
      <Container>
        <Header as="h2">🌻 How can you get involved?</Header>
        <Step>
          <Step.Title>Join our mailing list!</Step.Title>
          <Step.Description>
            Receive important updates on solar in Columbia County and learn how
            to get involved
          </Step.Description>
          <div>
            <Input />
            <button>Submit</button>
          </div>
        </Step>
        <Step>
          <Step.Title>Submit a comment of support to the Public Service Commission</Step.Title>
          <Step.Description>
            <a href="http://documents.dps.ny.gov/public/Comments/PublicComments.aspx?MatterCaseNo=20-F-0048">Here</a>
          </Step.Description>
        </Step>
      </Container>
      <Footer />
    </>
  );
}
