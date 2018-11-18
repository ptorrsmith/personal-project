import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//     return <div>This is the App.jsx</div>;
// };

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hello: "hello",
            things: [{
                id: 0,
                name: "nothing"
            }]
        }
    }

    render(props) {
        return(
            <div>
                <div>This is the App.jsx baby!</div>
                <p>ID: { this.state.things[0].id }. Name: { this.state.things[0].name } </p>
            </div>
        )
    }
}

export default App
