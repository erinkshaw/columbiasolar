import { Card, Container, Header } from "semantic-ui-react";

import Footer from "./Footer";
const members = [
  {
    header: 'Juan-Pablo Velez',
    description:
      'Software Engineer / Former Journalist / Co-Founder of Chi Hack Night / Climate Activist',
    meta: 'Copake, NY',
  },
  {
    header: 'Dan Haas',
    meta: 'Copake, NY',
    description: 'Retired Teacher / Copake Climate Smart Coordinator / Member Columbia Chapter of Citizens Climate Lobby / Board Member Harlem Valley Rail Trail Association',
  },
  {
    header: 'Erin Shaw',
    meta: 'Copake, NY',
  },
  {
    header: 'Elayne Dix',
    meta: 'Copake, NY',
  },
  {
    header: 'Amanda Pickering',
    meta: 'Copake, NY',
  },
  {
    header: 'Roxann Slate',
    meta: 'Copake Falls, NY',
  },
  {
    header: 'Eli Geminder',
    meta: 'Copake Falls, NY',
  },
  {
    header: 'Julia Pearson',
    meta: 'Chatham, NY',
  },
]

function About() {
  return (
    <>
      <Container text>
        <Header as="h2">👤 Who’s behind this?</Header>
        <p>Nope, we’re not an Astroturf group set up by Hecate Energy.</p>
        <p>
          We’re your neighbors. We feel that a lot of outdated and false
          information about Shepherd’s Run has been circulating in the
          community. We want to make sure the project happens, and we want to
          make sure it benefits our town as much as possible.
        </p>
        <p>
          Our country has spent the past 30 years dragging its feet on climate
          change. We’ve run out of time and need massive, realistic action now.
        </p>
        <p>
          It’s not somebody else’s problem. It’s going to take all of us. So
          let’s lead the charge.
        </p>
      <Header as="h2">Some of our members:</Header>
      <Card.Group items={members} />
      </Container>
      <Footer />
    </>
  );
}

export default About;
