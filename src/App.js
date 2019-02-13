import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28 },
            {id: '2', name: 'Manu', age: 29 },
            {id: '3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }

    nameChangeHandler = (event, id) => {
        const person= this.state.persons.find();

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

        let persons = null;
        if(this.state.showPersons){
            persons=(
                <div>
                    {this.state.persons.map((person, index)=>{
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age ={person.age}
                          key = {person.id}
                          change={(event)=> this.nameChangeHandler(event, person.id)}
                      />
                    })}
                </div>
            )

        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>

                {persons}


            </div>
        );
        /*

                    persons=(



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
            </div>);


            onClick={() => this.switchNameHandler("maximinian!!!!")}>Switch Name</button>*/

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

