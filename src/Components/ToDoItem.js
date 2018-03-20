import React, { Component } from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Utilities from '../Components/Utilities';



class ToDoItem extends Component {


  onSubmit(e) {

  }


  render() {
    return (
      <li className="UserInput">
      <form onSubmit>
          <input type="text" ref="title" placeholder="What's Next?"/>
          <input type="onSubmit" value="onSubmit" />
      </form>
        <button onClick={onSubmit}>
          Submit
        </button>
        <button onClick={onEdit}>
          Edit
        </button>
      </li>
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






export default ToDoItem;
