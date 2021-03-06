import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from "../components/Cockpit/Cockpit"


class App extends Component {
    constructor(props){
        super(props);
        console.log("[app.js] constructor");
        //this.state = {}
    }

    state = {
        persons: [
            { id:'1',name: 'Max', age: 28 },
            { id:'2',name: 'Manu', age: 29 },
            {id:'3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    static getDerivedStateFromProps(props, state){
        console.log("[app.js] getDerivedStateFromProps",props);
        return state;
    }

    // componentWillMount(){
    //     console.log("[App.js] componentWillMount");
    // }

    componentDidMount() {
        console.log("[app.js] componentDidMount");
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
        console.log("[app.js] render");

        let person = null;

        if(this.state.showPersons){
            person = <Persons
                persons={this.state.persons}
                clicked={this.deleteCharHandler}
                changed={this.nameChangedHandler}/>;
        }


        return (
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {person}
                </div>
        );
    }
}
export default App;
                    {/**/}
  {/*higher order component*/}

 {/*return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));*/}

//
//
// /*
// <Person
//     name={this.state.persons[0].name}
//     age={this.state.persons[0].age} />
// <Person
// name={this.state.persons[1].name}
// age={this.state.persons[1].age}
// click={this.switchNameHandler.bind(this, 'Max!')}
// changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
// <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age} />*/