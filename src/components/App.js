import React from 'react';

import Intro from './Intro';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="topbar">
          <div className="topbar__logo">buzek.io</div>
        </div>
        <header className="header">
          <Intro />
        </header>
      </div>
    );
  }
}

export default App;
