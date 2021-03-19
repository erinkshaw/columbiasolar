import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from "./logo.svg";

import "./Nav.css";

function Nav({ tab, setTab }) {
  const TABS = {
    home: 'Home',
    learn: 'Learn More',
    about: 'About Us',
    participate: 'Get Involved'
  };
  return (
    <div className="Nav">
      {Object.keys(TABS).map(currentTab => {
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
      <Logo />
    </div>
  );
}

export default Nav;
