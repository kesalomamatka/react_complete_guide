import React, {useEffect} from 'react';
import classes from "./cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass='';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length<=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
        assignedClasses.push(classes.bold );
    }
    //let classes = ['red','bold'].join(' ');
  return (
     <div className={classes.Cockpit}>
         <h1>Hi, I'm a React App</h1>
         <p className={assignedClasses.join(' ')}>This is really working!</p>
         <button
             className={btnClass}
             onClick={props.clicked}>Show Persons</button>
     </div>
  );
};

export default cockpit;