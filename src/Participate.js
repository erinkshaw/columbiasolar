import React from "react";
import { Container, Header, Input } from "semantic-ui-react";

import Footer from "./Footer";

export default function Participate() {
  return (
    <>
      <Container>
        <Header as="h2">🌻 How can you get involved?</Header>
        <Header as="h3">💌 Join our mailing list</Header>
          <Header as="h4">
            Receive important updates on solar in Columbia County and learn how
            to get involved
          </Header>
          <SubscribePage />

          <Header as="h3">
            Submit a comment of support to the Public Service Commission
          </Header>
          <p>
            <a href="http://documents.dps.ny.gov/public/Comments/PublicComments.aspx?MatterCaseNo=20-F-0048">
              Here
            </a>
          </p>
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
