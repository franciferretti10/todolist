import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
   super();
    this.state = {
      currentTodo: '',
      todos: []
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onChangeText(event){
    this.setState({ currentTodo: event.target.value });
  }
  
  onSubmitText(event){
    event.preventDefault();
      if(this.state.currentTodo.length != 0)
        this.setState({
          todos: [...this.state.todos, this.state.currentTodo],
          currentTodo: ''
        });
    }

    render(){
      return(
        <div>
          <h1> Todo List </h1>
          <form onSubmit={ this.onSubmitText }>
            <input value={ this.state.currentTodo } onChange={this.onChangeText}></input>
            <button>Insert</button>
            <ul>
              { this.state.todos.map((todo,index) => <li key={index}> { todo } </li>)}
            </ul>
          </form>
        </div>
      );
    }
  }

  export default App;
