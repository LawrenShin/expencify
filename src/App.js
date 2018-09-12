import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter.js';
import PlayGround from './PlayGround';
import Reducers from './Reducers';


const App = () => (
    <div>
        <AppRouter />
        <Reducers />
    </div>
);

export default App;