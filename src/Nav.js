import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from "./logo.svg";

import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = { width: 0 };

    window.addEventListener("resize", this.update);
  };

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
      home: 'Home',
      learn: 'Learn More',
      about: 'About Us',
      participate: 'Get Involved',
    };
    const TABKEYS = width > 800 ? Object.keys(TABS).reverse() : Object.keys(TABS);

    return (
      <div className="Nav">
        <Logo />
        {TABKEYS.map(currentTab => {
          const header = TABS[currentTab];
          return (
            <Link to={currentTab} className="nav-link" key={currentTab}>
              <button
                onClick={() => setTab(currentTab)}
                className={`${tab === currentTab ? 'disabled' : ''}`}>
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
