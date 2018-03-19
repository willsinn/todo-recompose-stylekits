import React, { Component } from 'react';
import { compose, withState, withHandlers } from 'recompose';


class ToDoItem extends Component {


  const EnhancedComponent = compose(
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
      <li className="UserInput">
      <form onSubmit>
          <input type="text" ref="title" placeholder="What's Next?"/>
          <input type="submit" value="Submit" />
      </form>
        <button onClick={submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default ToDoItem;
