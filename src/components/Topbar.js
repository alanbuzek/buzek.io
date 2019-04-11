import React from 'react';

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__logo">buzek.io</div>
        <div className="topbar__left-section">
          <ul className="topbar__links">
            <li className="topbar__links--link">Skills</li>
            <li className="topbar__links--link">Projects</li>
            <li className="topbar__links--link">Contact</li>
          </ul>
          <div className="topbar__icons">
            <i className="fab fa-github icon" />
            <i className="fab fa-linkedin icon" />
            <i className="fas fa-file icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
