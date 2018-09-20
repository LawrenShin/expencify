import { createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expences';
import filterReducer from '../reducers/filters';

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expences: expensesReducer,
      filters: filterReducer 
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};