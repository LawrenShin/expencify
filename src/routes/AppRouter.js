import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Create from '../components/create/Create.js';
import Edit from '../components/edit/Edit.js';
import NotFound from '../404.js';
import Dashboard from '../components/dashboard/Dashboard.js';
import LoginPage from '../components/login/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Weather from './../components/weather/Weather';
import WeatherCity from './../components/weather/WeatherCity';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute path="/create" component={Create} />
                <PrivateRoute path="/edit/:id" component={Edit} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/weather" component={Weather} />
                <PrivateRoute path="/weather/:name" component={WeatherCity} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;