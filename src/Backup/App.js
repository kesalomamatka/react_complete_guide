import React, { useState } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
//functional based
//class App extends Component {
const app = props =>{
    const [personState,setPersons] = useState({
        person: [
            {name:'Max',age:'26'},
            {name:'Manu', age:'23'},
            {name:'Stephanie', age:'21'}
        ]
    })

    console.log(personState);

    const switchNameHandler = () =>{
        setPersons({
            person: [
                {name:'Min',age:'26'},
                {name:'Manu', age:'23'},
                {name:'Stephanie', age:'21'}
            ]
        });
    };

    //this refer to our class
   // render() {
        return (
            <div className="App">
                <h1>He</h1>
                <button onClick={switchNameHandler}>Switch name</button>
                <p>H</p>
                <Person name={personState.person[0].name} age={personState.person[0].age}></Person>
                <Person name={personState.person[1].name} age={personState.person[1].age}>My hobbie:Racing</Person>
                <Person name={personState.person[2].name} age={personState.person[2].age} ></Person>

            </div>

        )

}
         //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   //}
//}

export default app;

/*
*  state = {
        person: [
            {name:'Max',age:'26'},
            {name:'Manu', age:'23'},
            {name:'Stephanie', age:'21'}
            ]
    }

    switchNameHandler = () =>{
      this.setState({
          person: [
              {name:'Min',age:'26'},
              {name:'Manu', age:'23'},
              {name:'Stephanie', age:'21'}
          ]
          });
    };

*
* */