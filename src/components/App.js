import React from 'react';

import LandingPage from './LandingPage';
import Topbar from './Topbar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <LandingPage path="/" exact />
      </React.Fragment>
    );
  }
}

export default App;
