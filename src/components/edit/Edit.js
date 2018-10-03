import React from 'react';
import { connect } from 'react-redux';
import ExpenceForm from './../expence_form/ExpenceForm';
import { editExpence, startRemoveExpense } from './../../actions/expences';

const Edit = (props) => {
    const id = props.expense[0].id;
    return (
        <div>
            <ExpenceForm
                expense={props.expense[0]}
                onSubmit={(expence) => {
                    props.dispatch(editExpence(id, expence));
                    props.history.push('/dashboard');
                }}
            />
            <button onClick={() => { 
                props.dispatch(startRemoveExpense({id}));
                props.history.push('/dashboard');
            }}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expences.filter((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit);