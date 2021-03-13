
import { ReactComponent as Logo } from "./logo.svg";

import "./Nav.css";

function Nav({ tab, setTab }) {
  const TABS = {
    home: 'Home',
    about: 'About Us',
    learn: 'Learn More',
    participate: 'Get Involved'
  };
  return (
    <div className="Nav">
      {Object.keys(TABS).map(currentTab => {
        const header = TABS[currentTab];
        return (
          <button
            onClick={() => setTab(currentTab)}
            key={currentTab}
            className={`${tab === currentTab ? 'disabled' : ''}`}>
            {header}
          </button>
        );
      })}
      <Logo />
    </div>
  );
}

export default Nav;
