import React from 'react';
import ExpenceForm from './../expence_form/ExpenceForm';
import { connect } from "react-redux";
import { addExpence } from './../../actions/expences';

const Create = (props) => (
    <div>
        <h1>Add expence</h1>
        <ExpenceForm 
            onSubmit={(expence) => {
                props.dispatch(addExpence(expence));
                props.history.push('/dashboard');
            }}
        />
    </div>
);

export default connect()(Create);