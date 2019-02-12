import React from 'react'

const person = (props) =>{

    return (
        <div>
            <p onClick={props.click}>im {props.name} and im {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
    //return <p>im a person and im {Math.floor(Math.random()*30)} </p>
};

export default person;