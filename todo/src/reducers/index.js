import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;


//when we were creating initial reducer

// import {ADD_TODO} from '../actions/action'

// //reducer is the logic

// const reducer = (state = [], action) => {
//     //given a type of action
//     //do that action. So you can use an if statement, ternary would not really work, switch is best.
//     switch(action.type) {
//         case ADD_TODO:
//             return {
//                 ...state, //always shallow copy your state
//                 todos: [...state, action.payload]
//             }

//         default: 
//             return state //almost always will be return state.
//     }
// } //only thing you need on an action is a type.


// export default reducer