import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    todos: [],
    searchTerm:null,
  };
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  handleSearchInputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSearchClick=()=>{
    console.log("i am in handleSearchClick")
    //api call using the state SearchTerm 
  }
  render() {
    return (
      <div>
        <div>test</div>
        <NavBar handleSearchInputChange={this.handleSearchInputChange} handleSearchClick={this.handleSearchClick}/>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
