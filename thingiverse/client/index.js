import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { provider } from 'react-redux'

import App from './components/App'

// add redux store. Give it reducers.


document.addEventListener('DOMContentLoaded', () => {
    // ReactDOM.render(
    render(
        <App />,
        document.getElementById('app')
    )
})
