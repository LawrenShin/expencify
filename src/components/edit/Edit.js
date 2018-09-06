import React from 'react';

const Edit = (props) => {
    return (
        <div>
            <h1>This is edit page</h1>
            <h3>Editing the expence with id of {props.match.params.id}</h3>
        </div>
    );
}

export default Edit;