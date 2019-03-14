import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) =>{
    const style={
        '@media (min-width:500px)':{
            width:'450px'
        }
    };


    return(
        <div className="Person" style={style}>
            <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
//..
export default Radium(person);









/*import React from 'react'
import './Person.css'

const person = (props) =>{

    return (
        <div className="Person">
            <p onClick={props.click}>im {props.name} and im {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change<} value={props.name}/>
        </div>
    );
    //return <p>im a person and im {Math.floor(Math.random()*30)} </p>
};

export default person;*/