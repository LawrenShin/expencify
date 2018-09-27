import uuid from 'uuid';
import database from '../firebase/firebase';

//add_expense
export const addExpence = (expense) => ({
  type: 'ADD_EXPENCE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => {
      console.log(expense);
      dispatch(addExpence({
        id: ref.key,
        description: expense.description,
        note: expense.note,
        amount: expense.amount,
        createdAt: expense.createdAt
      }));
    });
  };
};

//remove expence
export const removeExpence = ({ id } = {}) => ({
  type: 'REMOVE_EXPENCE',
  expence: {
    id: id
  }
});
// edit expence
export const editExpence = ( id, updates ) => ({
  type: 'EDIT_EXPENCE',
  id,
  updates
});