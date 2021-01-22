import React from 'react';

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <a className="topbar__logo special-font" href="http://buzek.io">
          dosha.design
        </a>
        <div className="topbar__left-section">
          <div className="topbar__icons">
            <a href="https://github.com/alanbuzek" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon" />
            </a>

            <a href="https://www.linkedin.com/in/alanbuzek/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
