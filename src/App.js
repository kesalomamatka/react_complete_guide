import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person: [
            {name:'Max',age:'26'},
            {name:'Manu', age:'23'},
            {name:'Stephanie', age:'21'}
            ]
    }

    //this refer to our class.
    render() {

        return (
            <div className="App">
                <h1>He</h1>
                <p>H</p>
                <Person name={this.state.person[0].name}></Person>
                <Person >My hobbie:Racing</Person>
                <Person ></Person>

            </div>

        )


         //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;

