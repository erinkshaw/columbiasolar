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
    meta: "Copake, NY",
  },
  {
    header: "Julia Pearson",
    meta: "Chatham, NY",
  },
];

function About() {
  return (
    <>
      <Container>
        <Header as="h2" size="huge">
          👤 Who’s behind this?
        </Header>
        <p>
          Nope, we’re not a fake advocacy group set up by Hecate Energy. We're
          your neighbors.
        </p>
        <p>
          We want Shepherd's Run to happen, we want it to be 60 megawatts, and we want
          it to benefit Copake and Columbia County as much as possible.
        </p>
        <p>
          Our country has spent the past 30 years dragging its feet on climate
          change. We’ve run out of time and need massive, realistic action now.
        </p>
        <p>
          It’s not somebody else’s problem. It’s going to take all of us. Let’s
          lead the charge.
        </p>
        <br />
        <Header as="h3" size="large">
          ☎️ &nbsp; How can I get in touch?
        </Header>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/friendsofcolumbiasolar"
          >
            <Icon name="facebook square" size="big" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:hello@friendsofcolumbiasolar.org"
          >
            <Icon name="mail" size="big" />
          </a>
          <br /> <br /> <br />
          <Header as="h3" size="large">
            💌 &nbsp; How can I stay up to date?
          </Header>
          <p>
            Join our mailing list to get updates on Shepherd’s Run, and how to
            help out.
          </p>
          <p>
            <em>Don't worry, we won't send you a million pointless emails. </em>
          </p>
          <SubscribePage />
        </div>
        <br /> <br />
        <Header as="h3" size="large">
          🙋‍♀️ &nbsp; Some of our members
        </Header>
        <Card.Group items={members} />
        <br /> <br />
        <Header as="h3" size="large">
          💪🏻 &nbsp; Our ally organizations
        </Header>
        <div className="allies">
          <a href="https://nyforcleanpower.org/">
            <img alt="New Yorkers for Clean Power" src="https://nyforcleanpower.org/wp-content/uploads/2018/04/340x200-NYfCP-Logo-1.png" />
          </a>
          <a href="https://www.nyrenews.org/">
            <img alt="NY Renews" src="https://images.squarespace-cdn.com/content/v1/58ae35fddb29d6acd5d7f35c/1620837476925-FY2F02WMWZVBNG1QJTFC/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/NYRenews-logo-green+%281%29+%281%29.png?format=1000w" />
          </a>
        </div>

      </Container>
      <Footer />
    </>
  );
}

export default About;

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
