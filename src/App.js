import React, { Component } from 'react';
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search/SearchBox";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  //map() explained
  //const myArray = [1,2,3,4]
  //myArray.map(el => el + 1)
  //this returns a new array = [2,3,4,5]
  //so map() takes a function argument and performs it on every iterated object and returns an array of those objects

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")  //the fetch() returns a promise whose body is the response from the API
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { monsters, searchField } = this.state; //destructuring of the state; the variable names here are references to the actual state variables
    const filteredMonsters = monsters.filter(monster => /*filter takes a function that is to be iterated over every element in an array and returns a new array with the filtered elements;takes two args: element to filter with and an index to start filtering from(by choice)*/
      monster.name.toLowerCase().includes(searchField.toLowerCase()) /*includes takes an argument(which is a reference) to compare to an object's reference in memory  */
    )
    /*To use the state after setting state, add a callback function there (happened in former onChange in search)*/
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          //handleChange={e => this.setState({ searchField: e.target.value })} 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
