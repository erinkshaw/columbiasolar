import React from "react";
import { Container, Header, Input } from "semantic-ui-react";

import Footer from "./Footer";

export default function Participate() {
  return (
    <>
      <Container>
        <Header as="h2">🌻 How can I help Shepherd's Run?</Header>
        <p>
          Opponents to Shepherd's Run have been very visible in our community,
          but supporters have not. We need to turn that around.
        </p>
        <p>
          Live in Columbia County? The most helpful thing you can do is to tell your <b>neighbors</b> and <b>New York State</b> that you support 
          the project.</p>
        <p>
          Live in Copake? Also voice your support to the <b>Town</b>.
        </p>
        <br/>
        <Header as="h3">🏠 Yard Signs for Neighbors</Header> 
        <p>
          Yard signs are critical for spreading awareness about why Shepherd's Run
          represents real climate action, and how it can help Copake reduce taxes, slash
          electricity bills, and restore farmland.
        </p>
        <p>To receive a yard sign, simply give us your email. We'll send you one!</p>
          <SubscribePage />
        <br/>
        <Header as="h3">🏛️ Contact the State and Town</Header>
          <p>
            Our leaders need to hear from supporters! 
          </p>
          <p><b>Step</b> 1️⃣</p>
          <p>Write a couple paragraphs about why you support the project.</p>
          <p>You might mention how it will <a href="">benefit Copake</a>, and how our State needs
          hundreds of large solar farms to solve the climate crisis. Include what town you live in.</p> 
          <p>
          <b>Step</b> 2️⃣
           <ul>
             <li>
             <a href="http://documents.dps.ny.gov/public/Comments/PublicComments.aspx?MatterCaseNo=20-F-0048">
            </a>Submit your message to New York State Public Service Commission. The siting board that decides
               whether to grant the permit will take this into consideration.
             </li>
             <li>Email your message to Copake's State Legislators: Senator Daphne Jordan (jordan@nysenate.gov) and Assemblymember Didi Barrett (barrettd@nyassembly.gov)</li>
             <li>Email your message to Copake's Town Board, if you live in Copake: Supervisor Jeanne E. Metler (Copakesupervisor@fairpoint.net) and Deputy Supervisor Richard Wolf (Copakedepsupervisor@fairpoint.net)</li>
           </ul>
        </p>
        <br/>
        <br/>
        <Header as="h2">💌 How can I stay in touch?</Header>
          <Header as="h4">
            Join our mailing list to get updates on Shepherd’s Run, and how to help out.
          </Header> 
            <p><i>Don't worry, we won't send you a million pointless emails. </i></p>
          <SubscribePage />
      </Container>
      <Footer />
    </>
  );
}

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      fNameValue: "",
      lNameValue: "",
    };
  }

  render() {
    return (
      <form
        action="https://gmail.us7.list-manage.com/subscribe/post?u=9dd8d566ed37424d61be611a2&amp;id=f5a9152861"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <label htmlFor="MERGE0">
          Email
          <Input
            type="email"
            name="EMAIL"
            id="MERGE0"
            value={this.state.emailValue}
            onChange={(e) => {
              this.setState({ emailValue: e.target.value });
            }}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </label>
        <label htmlFor="MERGE1">
          First name
          <Input
            type="text"
            name="FNAME"
            id="MERGE1"
            value={this.state.fNameValue}
            onChange={(e) => {
              this.setState({ fNameValue: e.target.value });
            }}
          />
        </label>
        <label htmlFor="MERGE2">
          Last name
          <Input
            type="text"
            name="LNAME"
            id="MERGE2"
            value={this.state.lNameValue}
            onChange={(e) => {
              this.setState({ lNameValue: e.target.value });
            }}
          />
        </label>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </form>
    );
  }
}
