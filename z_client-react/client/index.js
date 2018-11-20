import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
    // ReactDOM.render(
    render(
        <App />,
        document.getElementById('app')
    )
})
