import React from 'react';

const Validation = (props) => {
    let validationMessage="Text too long";
    if(props.length<5) validationMessage="Text too short";
    return (<div><p>{validationMessage}</p></div>);
}

export default Validation;