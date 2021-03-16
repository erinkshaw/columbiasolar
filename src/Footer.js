import { Icon } from "semantic-ui-react";

import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer">
    <div id="icons">
      <a href="https://www.facebook.com/friendsofcolumbiasolar">
        <Icon name="facebook square" size="big" />
      </a>
      <a href="mailto:hello@friendsofcolumbiasolar.org">
        <Icon name="mail" size="big" />
      </a>
    </div>
      <div>
        <div className="panel" id="one" />
        <div className="panel" id="two" />
        <div className="panel" id="three" />
        <div className="panel" id="four" />
        <div className="panel" id="five" />
      </div>
    </div>
  );
}
