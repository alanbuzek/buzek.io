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
            <a href="https://www.instagram.com/dosha.design/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon" />
            </a>

            <a href="https://www.linkedin.com/in/yulia-lee-41b35b137/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
