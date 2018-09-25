import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter.js';
import configureStore from './store/configureStore';
//actions
import { addExpence } from './actions/expences';

const store = configureStore();

store.dispatch( addExpence({ description: 'water bill', amount: 250, createdAt: 5000 }) );
store.dispatch( addExpence({ description: 'gas bill', amount: 77, createdAt: 15000 }) );
store.dispatch( addExpence({ description: 'Migration', amount: 70000 }) );


const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;