import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter.js';
import configureStore from './store/configureStore';
//actions
// import { startSetExpenses } from './actions/expences';
import './firebase/firebase';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;