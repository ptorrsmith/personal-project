import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//     return <div>This is the App.jsx</div>;
// };

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            things: [{
                id: 0,
                name: "nothing"
            }]
        }
    }

    render(props) {
        return <div>This is the App.jsx</div>
    }
}

export default App
