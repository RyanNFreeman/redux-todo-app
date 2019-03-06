import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider} from 'react-redux' //Provider injects information into our main application
import reducer from './reducers/reducer' //we created a reducer and then moved it to /reducers and import it here


// const store = createStore(reducer) //createStore takes in a function. In specific a reducer. Not a string. We can simplify and pass that into Provider.

ReactDOM.render(
    <Provider store={createStore(reducer)}>    
        <App />
    </Provider>, 
document.getElementById('root'));

//createStore(window.devToolsExtension && window.devToolsExtension()) TO ADD DEVTOOLS
