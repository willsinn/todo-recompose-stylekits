import React, { Component } from 'react';

class InputBox extends Component {


  render() {
    return (
      <div>
        <button onClick={this.props.submitProjectAction}>
          Submit
        </button>
      </div>
    );
  }
}

export default InputBox;
