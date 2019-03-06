import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    newTodo: ''
  }

  changeHandler = e => {
    console.log(this.state)
    this.setState({newTodo: e.target.value})
  }


  render() {
    return (
      <div className="App">
       <form>
         <input 
            type="text" 
            placeholder="enter text" 
            onChange={this.changeHandler}/>
       </form>
      </div>
    );
  }
}

export default App;
