import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./logo.svg";

import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = { width: 0 };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { tab, setTab } = this.props;
    const { width } = this.state;
    const TABS = {
      home: "Home",
      climate: "Climate",
      working: "Working Group",
      about: "About Us",
      act: "Act Now",
    };
    const TABKEYS =
      width > 600 ? Object.keys(TABS).reverse() : Object.keys(TABS);

    return (
      <div className="Nav">
        <Logo />
        {TABKEYS.map((currentTab) => {
          const header = TABS[currentTab];
          return (
            <Link to={currentTab} className="nav-link" key={currentTab}>
              <button
                onClick={() => {
                  updateButtom(currentTab);
                  setTab(currentTab);
                }}
                className={`${
                  tab === currentTab ? "disabled" : ""
                } ${currentTab}`}
              >
                {header}
              </button>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Nav;

function updateButtom(className) {
  const disabled = document.querySelector(".disabled");
  const newDisabled = document.querySelector(`.${className}`);
  disabled.classList.remove("disabled");
  newDisabled.classList.add("disabled");
}
