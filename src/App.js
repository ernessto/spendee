import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Overview from './components/Overview';
import Transactions from './components/Transactions';


export default () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/transactions'}>
                    <Transactions/>
                </Route>
                <Route exact path={'/overview'}>
                    <Overview/>
                </Route>
                <Redirect from={'/'} to={'/transactions'}/>
            </Switch>
        </div>
    </Router>
);



