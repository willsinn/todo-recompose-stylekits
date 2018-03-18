import React, { Component } from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';

class Enhancers extends Component {

  const enhance = compose(
    withState('value', 'updateValue', ''),
    withHandlers({
      onChange: props => event => {
        props.updateValue(event.target.value)
      },
      onSubmit: props => event => {
        event.preventDefault()
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
          <form onSubmit>
              <input type="text" ref="title" placeholder="What's Next?"/>
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default InputBox;
