import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return(
        <div className="output">
             <p> name={props.currentValue} </p>
        </div>
);

};
export default userOutput;