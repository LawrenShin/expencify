import React from 'react';
import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

//add_expense
const addExpence = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENCE',
  expence: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//remove expence
const removeExpence = ({ id } = {}) => ({
  type: 'REMOVE_EXPENCE',
  expence: {
    id: id
  }
});
// edit expence
const editExpence = ( id, updates ) => ({
  type: 'EDIT_EXPENCE',
  id,
  updates
});

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENCE':
      return [...state, action.expence];
    case 'REMOVE_EXPENCE':
      return state.filter(expence => expence.id != action.expence.id);
    case 'EDIT_EXPENCE':
      return state.map((expence) => {
        if(expence.id === action.id){
          return {
            ...expence,
            ...action.updates
          }
        }else{
          return expence;
        }
      });
    default:
      return state;
  }
};
//filters
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = (sortBy = 'amount') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy
});
const sortByDate = (sortBy = 'date') => ({
  type: 'SORT_BY_DATE',
  sortBy
});

const setStartDate = ( startDate = undefined ) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = ( endDate = undefined ) => ({
  type: 'SET_END_DATE',
  endDate
});

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default: 
      return state; 
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expence) => {
    const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expence.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expence.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer 
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(sortByAmount());

const Reducers = () => {
  return (
    <div>reducers</div>
  );
}

export default Reducers;