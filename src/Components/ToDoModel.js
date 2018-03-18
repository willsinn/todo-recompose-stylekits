import React, { Component } from 'react';
import { compose, withState, withHandlers } from 'recompose';

class ToDoModel extends Component {

  const enhance = compose(
    withState('value', 'editValue', ''),
    withHandlers({
      onChange: props => event => {
        props.updateValue(event.target.value)
      },
      onSubmit: props => event => {
        event.preventDefault();
        submitForm(props.value)
      }
    })
  )

  const Form = enhance(({ value, onChange, onSubmit }) =>
    <form onSubmit={onSubmit}>
      <label>Value
        <input type="text" value={value} onChange={onChange} />
      </label>
    </form>
  )



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

export default ToDoModel;
