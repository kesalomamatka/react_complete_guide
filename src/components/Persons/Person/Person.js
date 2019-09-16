import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    render(){
        console.log("[Person.js] rendering");
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>Im {this.props.name} and im {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text " onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
};


// const person = (props) =>{
//     console.log("[Person.js] rendering");
//     return(
//         <div className={classes.Person}>
//             <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text " onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };
//export default person;
export default Person;









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