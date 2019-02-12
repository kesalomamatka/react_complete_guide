import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = ( Name ) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: Name, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };


    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]}
        )

    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }



    render() {
        const style={
            backgroundColor: 'white',
            font : 'inherit',
            border:'1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>

                {
                  this.state.showPersons ===true ?
                  <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this,"Maximiliun")}
                        changed={this.nameChangeHandler}
                    >
                        My Hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        click={this.switchNameHandler.bind(this,"Max!")}

                    />
                   </div> : null

                }
            </div>
        );
        /*onClick={() => this.switchNameHandler("maximinian!!!!")}>Switch Name</button>*/

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;


/*
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

*/

