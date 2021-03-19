import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div className="App-Wrap">
            <Nav setTab={setTab} tab={tab} />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/learn" component={Learn}></Route>
            <Route exact path="/participate" component={Participate}></Route>
            <Route exact path="/about" component={About}></Route>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
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
