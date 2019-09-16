import React,{Component} from 'react';
import Person from "./Person/Person"
class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDerivedStateFromProps",props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate");

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message:"snapshot!"};
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("[Persons.js] componentDidUpdate");
    }

    render(){
       console.log("[persons.js] rendering");
       return this.props.persons.map((person,index) => {
           return (
               <Person
                   name={person.name}
                   age={person.age}
                   click={() => this.props.clicked(index)}
                   key={person.id}
                   changed={(event) => this.props.changed(event, person.id)}
               />
           );
       });
   }
};
export default Persons;


//
//
//
//
// const persons = props => {
//     console.log("[persons.js] rendering");
//     return props.persons.map((person,index) => {
//         return (
//             <Person
//                 name={person.name}
//                 age={person.age}
//                 click={() => props.clicked(index)}
//                 key={person.id}
//                 changed={(event) => props.changed(event, person.id)}
//             />
//         );
//     });
// };
// export default persons;

// const persons = (props) => {
//     return();
// }