import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expences';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expences: expensesReducer,
      filters: filterReducer 
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};