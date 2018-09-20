import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from '../components/create/Create.js';
import Edit from '../components/edit/Edit.js';
import Help from '../components/help/Help.js';
import Header from '../components/header/Header.js';
import NotFound from '../404.js';
import Dashboard from '../components/dashboard/Dashboard.js';

const Root = () => <h1>This is root</h1>;

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/create" component={Create} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/help" component={Help} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;