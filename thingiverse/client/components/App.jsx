import React from 'react'

import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ErrorMessage from './helpers/ErrorMessage'
import ThingsList from './things/ThingsList'
import ThingView from './things/ThingView'

import { getThings } from '../api-client'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            things: []
        }

        this.refreshList = this.refreshList.bind(this)
        // this.refreshThings = this.refreshThings.bind(this)
    }

    componentDidMount() {
        // console.log("App.componentDidMount")
        this.refreshList()
    }

    // refreshList() {
    //     getThings(this.refreshThings) // attempt using promises did not work :-(
    // }

    // refreshThings(err, things) { // this only as using promises not working :-(
    //     // console.log("got some things: ", things)
    //     this.setState({
    //         error: 'still no error',
    //         things: things 
    //     }, (console.log("AFter set state, state is ", this.state)))
    // }


    refreshList() {
        // getThings(this.renderThings)
        console.log("calling api getThings")
        getThings()
            .then(things => {
                console.log("App.refreshList: got things: setting state ", things)
                this.setState({
                    things: things
                })
            })
    }

    render() {
        console.log("App render props", this.props)
        return (
            <Router>
                {/* <React.Fragment> */}
                <div>
                    <Header appState={this.state} {...this.props} />
                    <ErrorMessage error={this.state.error} />
                    <Route exact path='/' render={() => <Redirect to='/things' />} />
                    <Route exact path='/things' component={() => <ThingsList things={this.state.things} />} />
                    <Route path='/thing/:id' component={(props) => {
                        // console.log("App thing things: ", this.state.things)
                        // console.log("App Props: ", props)
                        return <ThingView things={this.state.things} {...props} />
                    }} />


                    {/* <Route path='/thing/:id' component={(props) => {
                        console.log("App thing things: ", this.state.things)
                        console.log("App Props: ", props)
                        return <ThingView thing={this.state.things.find(thing => thing.id == props.match.params.id)} {...props} />
                    }} /> */}

                    {/* <Route path='/thing/:id' blah="Blah" component={ThingView} /> */}
                    <Footer appState={this.state} {...this.props} />
                </div>
                {/* </React.Fragment> */}
            </Router>
        )
    }
}

export default App
