import React from 'react';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  let totalAmount = 0, totalCount, expenseWord;
  if(props.expenses && props.expenses.length){
    totalCount = props.expenses.length;
    totalAmount = props.expenses.map((ex) => ex.amount).reduce((accumulator, current) => accumulator + current);
    totalAmount = numeral(totalAmount / 100).format('$0,0.00');
    expenseWord = totalCount === 1 ? 'expense' : 'expenses';
  }

  return(
    <div>
      {totalAmount ? <p><strong>Sum is {totalAmount} on {totalCount} {expenseWord} in total</strong></p> : <p>No expenses listed.</p>}
    </div>
  );
}

export default ExpensesSummary;