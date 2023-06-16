import React from "react";
import { Container, Header, Input } from "semantic-ui-react";

const ActNow = () => {
  return (
    <Container style={{ textAlign: "left" }}>
      <Header>Floods, Hurricanes, Record Heat, Wildfires</Header>
      <p>THE CLIMATE CRISIS IS HERE</p>
      <p>THE TIME TO ACT IS NOW</p>
      <p>WHAT CAN WE DO?</p>
      <p>
        <b>Support Shepherd’s Run</b>
      </p>
      <p>
        <b>Join FOCS Now</b>
      </p>
      <SubscribePage />
      <br />
      <p>
        <a href="https://www.change.org/p/urge-the-copake-town-board-and-hecate-to-negotiate-a-binding-agreement?utm_source=share_petition&amp;utm_medium=custom_url&amp;recruited_by_id=260c4f30-d142-0130-9e0f-3c764e051d51">
          Sign Our Petition!
        </a>
      </p>
      <p>
        <a href="https://documents.dps.ny.gov/public/MatterManagement/CaseMaster.aspx?MatterCaseNo=21-02553&amp;CaseSearch=Search">
          Submit{" "}
        </a>
        your message of support to ORES
      </p>
      <Header>Email your message to Copake&#39;s state legislators:</Header>
      <p>Senator Michelle Hinchey, <a href="mailto:hinchey@nysenate.gov">hinchey@nysenate.gov</a></p> 
      <p>Assembly Member Didi Barrett, <a href="mailto:barrettd@nyassembly.gov">barrettd@nyassembly.gov</a></p>
      <Header>
        Email your message to Copake&#39;s Town Board, if you live in Copake:
      </Header>{" "}
      <p>Supervisor Jeanne Mettler, <a href="mailto:copakesupervisor@fairpoint.net">copakesupervisor@fairpoint.net</a></p>
      <p>Deputy Supervisor Richard Wolf, <a href="mailto:copakedepsupervison@fairpoint.net">copakedepsupervison@fairpoint.net</a></p>
      <Header>Join Our Allies!</Header>
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
      </div>
      <br />
      <p>LET’S DO OUR PART </p>
      <p>TOGETHER WE CAN DO THIS</p>
    </Container>
  );
};

export default ActNow;

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
        className="validate"
        target="_blank"
        noValidate
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
