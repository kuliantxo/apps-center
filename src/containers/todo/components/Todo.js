import React, { PropTypes } from 'react'

const Todo = ({ onClick, onDelete, completed, deleted, text }) => (
  <li className={ 'list-group-item' + ( completed ? ' list-group-item-danger' : ' list-group-item-success' ) + ( deleted ? ' hide' : '' ) }
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={onDelete} className="btn btn-link pull-right">X</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
