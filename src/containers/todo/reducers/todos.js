const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
console.log('ADD_TODO');
      return {
        id: action.id,
        text: action.text,
        completed: false,
        deleted: false
      }
    case 'TOGGLE_TODO':
console.log('TOGGLE_TODO');
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'DELETE_TODO':
console.log('DELETE_TODO');
console.log(state);
console.log(action);
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        deleted: !state.deleted
      })
    default:
console.log('DEFAULT');
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
console.log('ADD_TODO2');
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
console.log('TOGGLE_TODO2');
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
console.log('DELETE_TODO2');
console.log(state);
      return state.map(t =>
        todo(t, action)
      )
    default:
console.log('DEFAULT2');
      return state
  }
}

export default todos
