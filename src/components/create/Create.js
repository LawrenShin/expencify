import React from 'react';
import ExpenceForm from './../expence_form/ExpenceForm';
import { connect } from "react-redux";
import { startAddExpense } from './../../actions/expences';

const Create = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add expense</h1>
            </div>
        </div>
        <ExpenceForm 
            onSubmit={(expence) => {
                props.dispatch(startAddExpense(expence));
                props.history.push('/dashboard');
            }}
        />
    </div>
);

export default connect()(Create);