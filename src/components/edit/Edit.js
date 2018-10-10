import React from 'react';
import { connect } from 'react-redux';
import ExpenceForm from './../expence_form/ExpenceForm';
import { editExpense, startRemoveExpense, startEditExpense } from './../../actions/expences';

const Edit = (props) => {
    const id = props.expense[0].id;
    return (
        <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>
            <div className="content-container">
                <ExpenceForm
                    expense={props.expense[0]}
                    onSubmit={(expence) => {
                        props.dispatch(startEditExpense(id, expence));
                        props.history.push('/dashboard');
                    }}
                />
                <button
                className="button button-secondary"
                onClick={() => { 
                    props.dispatch(startRemoveExpense({id}));
                    props.history.push('/dashboard');
                }}>Remove Expense</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expences.filter((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit);