import React from 'react';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

const ExpensesSummary = (props) => {
  let totalAmount = 0, totalCount, expenseWord;
  if(props.expenses && props.expenses.length){
    totalCount = props.expenses.length;
    totalAmount = props.expenses.map((ex) => ex.amount).reduce((accumulator, current) => accumulator + current);
    totalAmount = numeral(totalAmount / 100).format('0,0.00');
    expenseWord = totalCount === 1 ? 'expense' : 'expenses';
  }

  return(
    <div className="page-header">
      <div className="content-container">
        {totalAmount ? <h1 className="page-header-title"><strong>Sum is <span>{totalAmount}</span>&#8381; on <span>{totalCount}</span> <span>{expenseWord}</span> in total</strong></h1> : <h1 className="page-header-title">No expenses listed.</h1>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link>
        </div>  
      </div>
    </div>
  );
}

export default ExpensesSummary;