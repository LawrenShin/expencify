import React from 'react';
import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action) => {
  switch(action.type){
    case "INCREMENT":
      return {
        count : state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count : state.count - action.decrementBy
      };
    case "RESET":
      return {
        count : 0
      };
    case "SET":
      return{
        count: action.count
      }
    default:
      return state;
  }
});

const incrementBy = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy 
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
}); 

const reset = () => ({
  type: 'RESET'
});

const set = ({ count = 7 } = {}) => ({
  type: 'SET',
  count
});

const unsubscribe = store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: 25 }));

store.dispatch(decrementBy());

store.dispatch(reset());
store.dispatch(set({ count: 101 }));

unsubscribe();

const PlayGround = () => { 
  const book = {
    'title': 'Ego is the enemy',
    'author' : 'greatest ever',
    'publisher': {
      // 'name': 'EA books'
    }
  }
  const { title, author } = book;
  const { name = 'Self published'} = book.publisher;

  console.log(`Issa book about ego. The name of this thang is a ${title}, written by ${author} and published by ${name}`);

  const arr = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
  const [ item, ,mediumPrice ] = arr;
  console.log(`A medium ${item} costs ${mediumPrice}`);

  return (
    <div>
      <h4>Play redux</h4>
      <h3>Destructuring</h3>
    </div>
  );
};

export default PlayGround;