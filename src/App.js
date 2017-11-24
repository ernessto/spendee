import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// const initialState = {
//     loading: true,
//     message: '',
//     error  : null
// }
import paths from './data/routes_paths';

import Header from './components/Header';
import Transactions from './components/Transactions';
import Settings from './components/Settings';
import NotFound from './components/NotFound';


export default () => (
    <Router>
        <div>
            <Route component={Header}/>
            <Switch>
                <Route exact path={paths.Transactions} component={Transactions}/>
                <Redirect exact from={'/'} to={paths.Transactions}/>

                <Route path={paths.Settings} component={Settings} />

                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);
