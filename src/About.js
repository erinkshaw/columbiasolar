import { Card, Container, Header } from "semantic-ui-react";

import Footer from "./Footer";
const members = [
  {
    header: 'Juan-Pablo Velez',
    description:
      'Software Engineer, Climate Activist',
    meta: 'Copake, NY',
  },
  {
    header: 'Dan Haas',
    meta: 'Copake, NY',
    description: 'Retired Teacher, Board Member of Harlem Valley Rail Trail, Copake Climate Smart Coordinator',
  },
  {
    header: 'Peggy Lewis',
    description: 'Retired School Conselor',
    meta: 'Taconic Shores in Copake, NY',
  },
  {
    header: 'Eli Geminder',
    description: 'Metalwork Designer',
    meta: 'Copake Falls, NY',
  },
  {
    header: 'Roxann Slate',
    description: 'Glass Artisam',
    meta: 'Copake Falls, NY',
  },
  {
    header: 'Gary Lewis',
    description: 'Corporate Attorney',
    meta: 'Taconic Shores in Copake, NY',
  },
  {
    header: 'Elayne Dix',
    meta: 'Copake, NY',
  },
  {
    header: 'Erin Shaw',
    meta: 'Copake, NY',
  },
  {
    header: 'Amanda Pickering',
    meta: 'Copake, NY',
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
        <p>Nope, we’re not a fake advocacy group set up by Hecate Energy. We're your neighbors.</p>
        <p>
          We want Shepherd's Run to happen, we want it to be 60MW, and we want it to benefit Copake and Columbia County 
          as much as possible.
        </p>
        <p>
          Our country has spent the past 30 years dragging its feet on climate
          change. We’ve run out of time and need massive, realistic action now.
        </p>
        <p>
          It’s not somebody else’s problem. It’s going to take all of us. Let’s lead the charge.
        </p>
        <br/>
      <Header as="h3">Some of our members:</Header>
      <Card.Group items={members} />
      </Container>
      <Footer />
    </>
  );
}

export default About;
