import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

import Footer from "./Footer";
import img from "./yard_sign.png";

export default function Participate() {
  return (
    <>
      <Container>
        <Header as="h2" size="huge">
          🌻 How can I help Shepherd's Run?
        </Header>
        <p>
          Opponents to Shepherd's Run have been very visible in our community,
          but supporters have not. We need to turn that around.
        </p>
        <p>
          Live in Columbia County? The most helpful thing you can do is to tell
          your <b>neighbors</b> and <b>New York State</b> that you support the
          project.
        </p>
        <p>
          Live in Copake? Also voice your support to the <b>Town</b>.
        </p>
        <br />
        <Header as="h3" size="large">
          🏠 Yard Signs for Neighbors
        </Header>
        <p>
          Yard signs are critical for spreading awareness about why Shepherd's
          Run represents real climate action, and how it can help Copake reduce
          taxes, slash electricity bills, and restore farmland.
        </p>
        <p>
          To receive a yard sign, just email us at{" "}
          <b>hello@friendsofcolumbiasolar.org</b>. We'll send you one!
        </p>
        <Image src={img} size="large" />
        <br />
        <br />
        <br />
        <Header as="h3" size="large">
          🏛️ Contact the State and Town
        </Header>
        <p>Our leaders need to hear from supporters!</p>
        <p>
          <b>Step</b> 1️⃣
        </p>
        <p>Write a couple paragraphs about why you support the project.</p>
        <p>
          You might mention how it will
          <a target="_blank" href="">
            &nbsp;benefit Copake
          </a>
          , and how our State needs hundreds of large solar farms to solve the
          climate crisis. Include what town you live in.
        </p>
        <p>
          <b>Step</b> 2️⃣
          <ul>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="http://documents.dps.ny.gov/public/Comments/PublicComments.aspx?MatterCaseNo=20-F-0048"
              >
                Submit
              </a>{" "}
              your message to the New York State Siting Board that will decide
              on the project.
            </li>
            <li>
              Email your message to Copake's State Legislators:{" "}
              <strong>Senator Daphne Jordan</strong> (jordan@nysenate.gov) and{" "}
              <strong>Assemblymember Didi Barrett</strong>{" "}
              (barrettd@nyassembly.gov)
            </li>
            <li>
              Email your message to Copake's Town Board, if you live in Copake:{" "}
              <strong>Supervisor Jeanne Mettler</strong>{" "}
              (copakesupervisor@fairpoint.net) and{" "}
              <strong>Deputy Supervisor Richard Wolf</strong>{" "}
              (copakedepsupervisor@fairpoint.net)
            </li>
          </ul>
        </p>
      </Container>
      <Footer />
    </>
  );
}
