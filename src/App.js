import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Create from './components/create/Create.js';
import Edit from './components/edit/Edit.js';
import Help from './components/help/Help.js';

const Root = () => <h1>This is root</h1>;

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Root} />
            <Route strict path="/create" component={Create} />
            <Route strict path="/edit" component={Edit} />
            <Route strict path="/help" component={Help} />
        </div>
    </Router>
);

export default App;