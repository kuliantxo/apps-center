import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="New todo..." ref={node => {
          input = node
        }} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Add Todo</button>
        </span>
      </div>
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
