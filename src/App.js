import React, { Component } from 'react';
import InputBox from './Components/InputBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToDoModel />
        <InputBox />
        <ToDoModel />
      </div>
    );
  }
}

export default App;
