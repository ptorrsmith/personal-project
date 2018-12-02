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
        // null object
        this.state = {
            error: null,
            things: [{
                id: 0,
                name: "nothing",
                description: ""
            }]
        }

        this.refreshList = this.refreshList.bind(this)
        // this.refreshThings = this.refreshThings.bind(this)
    }

    componentDidMount() {
        console.log("App.componentDidMount", this.props, "STATE", this.state)
        this.refreshList()
    }

    shouldComponentUpdate() {
        console.log("Should component mount", this.props || "No props")
        return true
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props, "STATE", this.state)
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
                console.log("RefreshList: ", this.props, " State: ", this.state)
                console.log("App.refreshList: got things: setting state ", things)
                this.setState({
                    things: things
                })
            })
    }

    render() {
        console.log("App render props", this.props)
        return(
            <Router>
                {/* <React.Fragment> */}
                <div>
                    <Header appState={this.state} {...this.props} />
                    <ErrorMessage error={this.state.error} />
                    <Route exact path='/' render={() => <Redirect to='/things' />} />
                    <Route exact path='/things' component={(props) => <ThingsList things={this.state.things} />} />
                    <Route exact path='/things/:id' component={(props) => {
                        console.log("App things/id: things: ", this.state.things)
                        console.log("App things/id: render Props:>>>>>>>>>>>> ", props)
                        if (props.match && props.match.params && props.match.params.id) {
                            const id = props.match.params.id
                            const thing = this.state.things.find( thing => thing.id == id)  // bloody = vs == and === !!
                            return <ThingView thing={thing} {...props} />
                        }
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
