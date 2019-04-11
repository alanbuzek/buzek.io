import React from 'react';

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <a className="topbar__logo" href="http://buzek.io">
          buzek.io
        </a>
        <div className="topbar__left-section">
          <div className="topbar__icons">
            <a href="https://github.com/Alanyss" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon" />
            </a>

            <a href="https://www.linkedin.com/in/alan-buzek-51bb8b142/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
