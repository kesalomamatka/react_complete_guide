import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>He</h1>
                <p>H</p>
                <Person name='Max' age='26'></Person>
                <Person name='Manu' age='26'>My hobbie:Racing</Person>
                <Person name='Stephanie' age='26'></Person>

            </div>

        )


         //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;

