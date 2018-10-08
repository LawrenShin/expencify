import uuid from 'uuid';
import database from '../firebase/firebase';

//add_expense
export const addExpence = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

export const setExpenses = (expenses) => (
    {
    type: 'SET_EXPENSES',
    expenses
  }
);

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};

//remove expence
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id: id
  }
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenseToRemove = {path: `users/${uid}/expenses/${id}`, id};
    return database.ref(expenseToRemove.path).remove().then(() => {
      dispatch(removeExpense(expenseToRemove));
    });
  }
}

// edit expence
export const editExpense = ( {id, updates} ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenseToUpdate = {path: `users/${uid}/expenses/${id}`, id, updates};
    return database.ref(expenseToUpdate.path).update(expenseToUpdate.updates).then(() => {
      dispatch(editExpense(expenseToUpdate));
    })
  }
}