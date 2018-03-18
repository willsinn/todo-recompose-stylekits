import React, { Component } from 'react';

class InputBox extends Component {


  render() {
    return (
      <div>
          <form onSubmit>
              <input type="text" ref="title" placeholder="What's Next?"/>
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default InputBox;
