import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from './components/create/Create.js';
import Edit from './components/edit/Edit.js';
import Help from './components/help/Help.js';
import NotFound from './404.js';

const Root = () => <h1>This is root</h1>;

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;