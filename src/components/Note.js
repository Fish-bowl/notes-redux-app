import React from 'react' 
import { connect } from 'react-redux'

const Note = ({ id, name, complete, dispatch}) => (
  <li>
    {name}
    <button onClick={() => dispatch({ type: 'TOGGLE_NOTE', id })}
      style={complete ? { textDecoration: 'line-through', color: 'green' } : {}} >mark</button>
  <button>Unstick</button>
  <button>Edit</button>
  <button>Show</button>
  </li>
)

export default connect()(Note) 