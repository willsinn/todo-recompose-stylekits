import React, { Component } from 'react';

class ToDoItem extends Component {


  render() {
    return (
      <li className="UserInput">
      <form onSubmit>
          <input type="text" ref="title" placeholder="What's Next?"/>
          <input type="submit" value="Submit" />
      </form>
        <button onClick={onSubmit}>
          Submit
        </button>
      </li>
    );
  }
}

export default ToDoItem;
