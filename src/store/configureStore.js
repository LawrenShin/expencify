import { createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expences';
import filterReducer from '../reducers/filters';

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expences: expensesReducer,
      filters: filterReducer 
    })
  );
  return store;
};