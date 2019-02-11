import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'




  const app = props => {
    const [ personState, setPersonState]= useState(
        {
            persons: [
                {name: 'max', age: 28},
                {name: 'manu', age: 18},
                {name: 'elsa', age: 22}
            ]

        });

    const [otherstate, setOtherstate] = useState(
        'other state'
    )

     const switchNameHandler = () => {

         setPersonState({
             persons:[
                 {name : 'maximlian', age : 28},
                 {name : 'manu', age : 18},
                 {name : 'elsa', age : 29}
             ]
         })
     }


    return (
      <div className="App">
          <button onClick={switchNameHandler}>switch</button>
          <h1>Hi </h1>

          <Person name ={personState.persons[0].name} age = {personState.persons[0].age}>my hobit: racing</Person>

          <Person name ='BBB' age = '15'/>

          <Person name ='CCC' age = '16'/>

      </div>
    );
  }


export default app;



