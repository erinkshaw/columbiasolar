import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import About from "./About";
import Benefits from "./Benefits";
import Footer from "./Footer";
import Learn from "./Learn";
import Nav from "./Nav";
import Participate from "./Participate";

import "./App.css";

const TABS = {
  home: Home,
  about: About,
  learn: Learn,
  participate: Participate,
};

function App() {
  const [tab, setTab] = useState("home");
  const Page = TABS[tab];
  return (
    <div className="App">
      <Nav setTab={setTab} tab={tab} />
      <div className="App-Wrap">
        <Page />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Container>
        <Header as="h2" size="huge">
          Shepherd’s Run Solar Farm: Great for Copake, Great for Climate
          <Header.Subheader>
            <p>
              Columbia County residents united in support of Shepherd’s Run.
            </p>
          </Header.Subheader>
        </Header>
        <Benefits />
      </Container>
      <Footer />
    </>
  );
}
export default App;
