import React from "react";
import QueryString from 'query-string';
import { Accordion, Container, Header, Segment } from "semantic-ui-react";

import Footer from "./Footer";
import { scopeFacts, scopeReasons } from "./research";

import "./Learn.css";

const STATE_DEFAULT = { section: '', activeIndex: -1 };

class Learn extends React.Component {
  constructor() {
    super();

    this.state = { ...STATE_DEFAULT };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const [ section, activeIndex ] = Object.entries(QueryString.parse(location.search))[0];
      this.setState({ section, activeIndex: parseInt(activeIndex) }, this.scrollToHeader)
    }
  }

  scrollToHeader = () => {
    const { activeIndex, section } = this.state;
    const element = document.getElementById(`${section}-${activeIndex}`);
    element.scrollIntoView({ block: "start", inline: "nearest", behavior: 'smooth' });
  }

  setPageQuery = (section, activeIndex) => {
    if (this.state.section !== section || this.state.activeIndex !== activeIndex) {
      this.setState({ section, activeIndex }, () => {
        this.props.history.push({
          pathname: 'learn',
          search: `?${section}=${activeIndex}`
        })
        this.scrollToHeader();
      });
    } else {
      this.setState({ ...STATE_DEFAULT });
    }
  };

  render() {
    const { activeIndex } = this.state;
    const factsPanels = scopeFacts(this.setPageQuery).map((f, i) => ({ ...f, key: i, }));
    const reasonPanels = scopeReasons(this.setPageQuery).map((f, i) => ({ ...f, key: i }));

    return (
      <>
        <Container className="Learn">
          <Header as="h2" size="huge">
            🙋 But wait, won’t all those panels . . .
          </Header>
          <Accordion panels={factsPanels} activeIndex={activeIndex} />
        </Container>
        <br />
        <br />
        <Container className="Why">
          <Header as="h2" size="huge">
            🤔 But can’t we instead . . .
          </Header>
          <Accordion panels={reasonPanels} />
          <br />
          <br />
          <Segment>
            <p>
              <b>Note</b>: to comply with New York State regulations, Hecate is
              studying how the solar farm will affect agriculture, wildlife, and
              property values, and dozens of other topics.
            </p>
            <p>
              The studies will be published this summer. We'll know much more
              then.
            </p>
            <p>
              For now, we provide evidence from academic studies, other solar
              projects, and local community knowledge.
            </p>
          </Segment>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Learn;
