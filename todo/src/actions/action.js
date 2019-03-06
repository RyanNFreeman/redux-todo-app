//action is message

export const ADD_TODO = 'ADD_TODO' //caps are conventional

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo //payload is conventional, but it's a foobar
    }
}

//need one thing -- a type.