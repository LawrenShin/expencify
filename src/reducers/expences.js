const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENCE':
      return [...state, action.expense];
    case 'REMOVE_EXPENCE':
      return state.filter(expence => expence.id !== action.expence.id);
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

export default expensesReducer;