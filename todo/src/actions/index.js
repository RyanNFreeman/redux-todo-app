//action is message

export const NEW_TODO = 'ADD_TODO' //caps are conventional
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export const addTodo = (todo) => {
    return {
        type: NEW_TODO,
        payload: todo //payload is conventional, but it's a foobar
    }
}

//need one thing -- a type.

export const toggleComplete = (index) => {
    return {
      type: TOGGLE_COMPLETE,
      payload: index
    };
  };