import { Container, Header, List } from "semantic-ui-react";

const Working = () => {
  return (
    <Container>
      <Header as="h2">
        <u>DON’T LET THE PROMISE OF THE WORKING GROUP DIE!</u>
      </Header>
      <p>
        Nearly a year ago, a Working Group — including Friends of Columbia
        Solar, Columbia Land Conservancy, Scenic Hudson, and Sensible Solar for
        Rural New York — came together to recommend ways in which Shepherd’s Run
        could benefit both the town of Copake and climate.
      </p>
      <p>
        Representatives of The Working Group along with local landscape
        architects presented their vision of how to make Shepherd’s Run{" "}
        <a href="http://www.craryvillegateway.org/">
          A MODEL OF COMMUNITY-ENGAGED RURAL SOLAR{" "}
        </a>
      </p>
      <Header>
        <u>The Working Group Recommendations Include the Following:</u>
      </Header>
      <List>
        <List.Item>
          <p>
            Tax Money for Copake Estimated Between $5 million and $7 million{" "}
          </p>
        </List.Item>
        <List.Item>
          <p>Community Green Space</p>
        </List.Item>
        <List.Item>
          <p>Additional Screening and Landscaping</p>
        </List.Item>
        <List.Item>
          <p>Agriculture and Solar Working Together</p>
        </List.Item>
        <List.Item>
          <p>Reduced Electricity Costs</p>{" "}
        </List.Item>
        <List.Item>
          <p>Rail Trail Extension </p>
        </List.Item>
      </List>
      <p>
        Based on these recommendations, FRIENDS OF COLUMBIA SOLAR urges Hecate
        and the Town of Copake to negotiate in good faith, with COMPROMISE on
        both sides.
      </p>
      <p>Some of these recommendations have already been accepted by Hecate.</p>
      <p>
        The Working Group vision has been met with excitement and broad
        community support, notably this editorial in the Columbia Paper:
      </p>
      <p>
        <a href="https://theupstater.com/the-columbia-paper/editorial-is-there-a-way/">
          “Find a compromise. Build the solar farm.”
        </a>
      </p>
    </Container>
  );
};

export default Working;
