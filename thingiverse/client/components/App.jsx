import React from 'react'

import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ErrorMessage from './helpers/ErrorMessage'
import ThingsList from './things/ThingsList'

import { getThings } from '../api-client'


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

        this.refreshList = this.refreshList.bind(this)
        this.refreshThings = this.refreshThings.bind(this)
    }

    componentDidMount() {
        console.log("App.componentDidMount")
        this.refreshList()
    }

    refreshList() {
        getThings(this.refreshThings) // attempt using promises did not work :-(
    }

    refreshThings(err, things) { // this only as using promises not working :-(
        console.log("got some things: ", things)
        this.setState({
            error: err,
            things: things || []
        })
    }


    // refreshList() {
    //     // getThings(this.renderThings)
    //     console.log("calling api getThings")
    //     getThings()
    //         .then(things => {
    //             console.log("App.refreshList: got things: setting state ", things)
    //             this.setState({
    //                 things: things
    //             })
    //         })
    // }


    render(props) {
        return(
            <Router>
            <React.Fragment>
            <div>
            <Header appState={this.state} {...props} />
            <ErrorMessage error={this.state.error} />
                <h2>Welocome to thingiverse</h2>
                {console.log("App.render: state things: ", this.state.things)}
                <p>There are {this.state.things.length} Things</p>
                {/*<p>Id: { this.state.things[0].id }. Name: { this.state.things[0].name } </p> */}
                {console.log("About to render ThingsList ")}
            <ThingsList appState={this.state} things={this.state.things} />
            <Footer appState={this.state} {...props}   />
            </div>
            </React.Fragment>
            </Router>
        )
    }
}

export default App
