import React, { Component } from 'react';
import { mapProps } from 'recompose';
import ToDoItem from './Components/ToDoItem';
import ToDoModel from './Components/ToDoModel';
import TodoCounter from './Components/ToDoCounter';


class App extends Component {




  render() {
    return (
      <div className="App">
        <TodoCounter />
        <ToDoItem />
        <ToDoModel />
      </div>
    );
  }
}

export default App;
