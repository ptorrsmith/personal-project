import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";

// redux store, thunk middleware, compose tools
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// redux combinedReducer
import combinedReducer from './reducers' // gets index.js

// redux state provider
import { Provider } from 'react-redux'

// add redux store. Give it reducers.
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const store = createStore(combinedReducer, compose(applyMiddleware(thunkMiddleware), devTools))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
console.log("client index.js Created Store")
// our main app
import App from './components/App'

console.log("client index adding event listener")

document.addEventListener('DOMContentLoaded', () => {
    // ReactDOM.render(
    console.log("client index event listener fired")
    console.log("Provider", Provider)
    render(
        <Provider store={store}>
                    <App />
        </Provider>,
        document.getElementById('app')
    )
    // render(
    //     <p>boo</p>,
    //     document.getElementById('app')
    //)
})
