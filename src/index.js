import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import loginReducer from './reducer/loginReducer'
import messageReducer from './reducer/messageReducer';

const reducer = combineReducers({
    user: loginReducer,
    messages: messageReducer
});
const store = createStore(reducer);
console.log("Store", store.getState());


ReactDOM.render(
    <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));


