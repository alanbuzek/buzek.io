import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from './LandingPage';
import Masterlingo from './Masterlingo';
import Topbar from './Topbar';

class App extends React.Component {
  componentDidMount() {
    console.log(window.location.pathname);
  }
  render() {
    return (
      <Router>
        <Topbar />
        <LandingPage path="/" exact />
        <Masterlingo path="/masterlingo" exact />
      </Router>
    );
  }
}

export default App;
