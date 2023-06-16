import { Container, Header } from "semantic-ui-react";

const Benefits = () => {
  return (
    <Container>
      <Header>We are your neighbors.</Header>

      <p>
        We’ve united to support Shepherd’s Run while advocating benefits for our
        community.
      </p>
      <p>
        <a href="/#/about" onClick={() => updateButtom("about")}>
          [About Us]
        </a>
      </p>
      <p>
        We support the Working Group and urge Hecate Energy and the Town of
        Copake to negotiate an agreement with compromise on both sides.
      </p>
      <p>
        <a href="/#/working" onClick={() => updateButtom("working")}>
          [Working Group]
        </a>
      </p>
      <p>
        We are committed to challenging disinformation about climate change.
      </p>
      <p>
        <a href="/#/climate" onClick={() => updateButtom("climate")}>
          [Climate]
        </a>
      </p>
      <p>
        We champion a spirit of cooperation and responsibility through our
        support of climate action.
      </p>
      <p>
        Join the movement to safeguard the future for our children — and their
        children.
      </p>
      <p>
        <a href="/#/act" onClick={() => updateButtom("act")}>
          [Act Now]
        </a>
      </p>
    </Container>
  );
};

export default Benefits;

function updateButtom(className) {
  const disabled = document.querySelector(".disabled");
  const newDisabled = document.querySelector(`.${className}`);
  disabled.classList.remove("disabled");
  newDisabled.classList.add("disabled");
}
