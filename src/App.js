import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                    
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
