import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routes/AppRouter.js';
import configureStore from './store/configureStore';
//actions
import { startSetExpenses } from './actions/expences';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';

const store = configureStore();

let App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let isRendered = false;
const renderApp = () => {
    if(!isRendered){
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

export default App;