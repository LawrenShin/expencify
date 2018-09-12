import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from '../components/create/Create.js';
import Edit from '../components/edit/Edit.js';
import Help from '../components/help/Help.js';
import Header from '../components/header/Header.js';
import NotFound from '../404.js';

const Root = () => <h1>This is root</h1>;

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Root} />
                <Route exact path="/create" component={Create} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;