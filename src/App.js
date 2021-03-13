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
      <Page />
    </div>
  );
}

function Home() {
  return (
    <>
      <Container text>
        <Header as="h2">
          Shepherd’s Run Solar Farm: Great for Copake, Great for Climate
          <Header.Subheader>
            Columbia County residents united in support of Shepherd’s Run.
          </Header.Subheader>
        </Header>
        <Benefits />
      </Container>
      <Footer />
    </>
  );
}
export default App;
