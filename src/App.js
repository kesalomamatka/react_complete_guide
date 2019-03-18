import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id:'1',name: 'Max', age: 28 },
            { id:'2',name: 'Manu', age: 29 },
            {id:'3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState( {
            persons: [
                {id:'1', name: newName, age: 28 },
                {id:'2', name: 'Manu', age: 29 },
                {id:'3', name: 'Stephanie', age: 27 }
            ]
        } )
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        //const person = Object.assign({},this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons=[...this.state.persons];
        persons[personIndex]=person;
        
        this.setState({
            persons:persons
        });




        /*
        this.setState( {
            persons: [
                {id:'1', name: 'Max', age: 28 },
                {id:'2', name: event.target.value, age: 29 },
                {id:'3', name: 'Stephanie', age: 26 }
            ]
        } )    */
    }

    deletePersonHandler = (personIndex) =>{
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }

    togglePersonsHandler = () =>{
        const doesShowPersons = this.state.showPersons;
        this.setState({showPersons: !doesShowPersons});
    }

    //onClick={() => this.switchNameHandler('Maximilian!!')}>Show Persons</button>
    //Variable hold jsx

    render () {


        let person = null;

        let btnClass = "";

        if(this.state.showPersons){
            person = (

                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}

                </div>
            );
            btnClass = classes.Red;

        }
        const assignedClasses = [];
        if(this.state.persons.length<=2){
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length<=1){
            assignedClasses.push(classes.bold );
        }
        //let classes = ['red','bold'].join(' ');

        return (

                <div className={classes.App}>
                    <h1>Hi, I'm a React App</h1>
                    <p className={assignedClasses.join(' ')}>This is really working!</p>
                    <button
                        className={btnClass}
                        onClick={this.togglePersonsHandler}>Show Persons</button>

                        {person}

                </div>

        );
    }
}

export default App;

                //higher order component

                // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));



/*
<Person
    name={this.state.persons[0].name}
    age={this.state.persons[0].age} />
<Person
name={this.state.persons[1].name}
age={this.state.persons[1].age}
click={this.switchNameHandler.bind(this, 'Max!')}
changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
<Person
    name={this.state.persons[2].name}
    age={this.state.persons[2].age} />*/