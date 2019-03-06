import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="new todo"
            value={this.state.newTodo}
          />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);

//initially what we had when we started
// import React, { Component } from 'react';
// import { connect } from 'react-redux' //when we are using connect we need to import
// import {addTodo} from './actions/action'

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = { newTodo: ''}
//     this.addTodo = this.addTodo.bind(this)
//   }

//   addTodo = e => {
//     e.preventDefault(); //we need to do this so it persists through submit
    
//   }

//   changeHandler = e => {
//     console.log(this.state)
//     this.setState({newTodo: e.target.value})
//   }


//   render() {
//     return (
//       <div className="App">
//        <form>
//          <input
//             type="text" 
//             placeholder="enter text" 
//             onChange={this.changeHandler}
//             onSubmit={this.addTodo}
//             />
//           <input type="submit" value="submit"/>
//        </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => { //returns pieces of state that you want added in
//   return {
//     newTodo: App.prototype.addTodo
//   }
// }


// export default connect(
//   mapStateToProps, 
//   { addTodo }
//   )(App);
// //we have to connect mapStateToProps to our App. Connects all properties that are data values
// //with the second argument we can add any logic. like an action
// //connect uses dispatch which is available on our store