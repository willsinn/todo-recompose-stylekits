import React, { Component } from 'react';
import { compose, withState, withHandlers } from 'recompose';

class ToDoModel extends Component {



  render() {
    return (
      <div>

      </div>
    );
  }
}

const enhance = compose (
  withState('refs', 'title', 'updateTitle', ''),
  withHandlers({
    onEdit: props => event => {
      props.updateTitle(event.target.ref.title)
    },
    onSubmit: props => event => {
      event.preventDefault();
      submitForm(props.refs.title)
    }
  })
)

const Form = enhance (({ refs, title, onEdit, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <label> title
     <input type="text" ref={title} onEdit={onEdit} />
    </label>
  </form>
)


export default ToDoModel;
