import React from 'react'

import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ErrorMessage from './helpers/ErrorMessage'
import ThingsList from './things/ThingsList'

import getThings from '../api-client'


// The App is stateful, it gets and holds the list of things
//  and passes this down as props
// This can be moved to redux eventually
// 
// 
// 

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            hello: "hello",
            things: [{
                id: 0,
                name: "nothing"
            }]
        }
    }

    componentDidMount() {
        console.log("App.componentDidMount")
        this.refreshList()

    }

    refreshList() {
        console.log("calling api getThings")
        getThings()
            .then(things => {
                this.setState({
                    things: things
                })
            })
    }


    render(props) {
        return (
            <Router>
                <React.Fragment>
                    <div>
                        <Header appState={this.state} {...props} />
                        <ErrorMessage error={this.state.error} />
                        <h2>Welocome to thingiverse!</h2>
                        {/*<p>Id: { this.state.things[0].id }. Name: { this.state.things[0].name } </p> */}
                        <ThingsList appState={this.state} things={this.state.things} />
                        <Footer appState={this.state} {...props} />
                    </div>
                </React.Fragment>
            </Router>
        )
    }
}

export default App
