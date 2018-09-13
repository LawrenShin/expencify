import uuid from 'uuid';

//add_expense
export const addExpence = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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