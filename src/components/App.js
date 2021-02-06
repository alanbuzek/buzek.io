import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import LandingPage from './LandingPage';
import Topbar from './Topbar';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Topbar />
                <Router>
                    <Route path="*">
                        <LandingPage />
                    </Route>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
