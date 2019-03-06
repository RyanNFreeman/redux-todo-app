import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux' //Provider injects information into our main application
import { createStore } from 'redux';
import rootReducer from './reducers' //we created a reducer and then moved it to /reducers and import it here


// const store = createStore(reducer) //createStore takes in a function. In specific a reducer. Not a string. We can simplify and pass that into Provider.

ReactDOM.render(
    <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
    </Provider>, document.getElementById('root'));

//createStore(window.devToolsExtension && window.devToolsExtension()) TO ADD DEVTOOLS
