import React from 'react'

import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ErrorMessage from './helpers/ErrorMessage'
import ThingsList from './things/ThingsList'
import ThingView from './things/ThingView'
import CreateThing from './things/CreateThing'

// For Redux State
import { connect } from 'react-redux' // to map state and dispatch to props

// import the thunk actions we want to call
import { fetchThings } from '../actions/thingActions'

// import { getThings } from '../api-client'
// no longer required

class App extends React.Component {

    constructor(props) {
        // console.log("App constructing")
        super(props)
        // null object
        // this.state = {
        //     error: null,
        //     things: [{
        //         id: 0,
        //         name: "nothing",
        //         description: ""
        //     }]
    }

    // this.refreshList = this.refreshList.bind(this)


    componentDidMount() {
        // console.log("App.componentDidMount", this.props, "STATE", this.state)

        //Redux way... get things into global state

        this.props.fetchThings()  // though not used in the App component, will be available to all components that map to it

        // old way
        // this.refreshList()
    }

    shouldComponentUpdate() {
        // console.log("Should component mount", this.props || "No props")
        return true
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate", this.props, "STATE", this.state)
    }

    render() {
        // console.log("App render props", this.props)
        // const things = this.props.things.things // before mapping state to props and returning only things collection
        const things = this.props.things
        return (
            <Router>
                {/* <React.Fragment> */}
                <div>
                    <Header appState={this.state} {...this.props} />
                    <ErrorMessage error={this.props.error} />
                    <Route exact path='/' render={() => <Redirect to='/things' />} />
                    {/* <Route exact path='/things' component={(props) => <ThingsList things={this.state.things} />} /> */}
                    <Route exact path='/things' component={ThingsList} />
                    <Route exact path='/things/new' component={CreateThing} />
                    <Route exact path='/things/:id' component={(props) => {
                        // console.log("App things/id: things: ", this.state.things)
                        // console.log("App things/id: render Props:>>>>>>>>>>>> ", props)
                        if (props.match && props.match.params && props.match.params.id) {
                            const id = props.match.params.id
                            const thing = this.props.things.find(thing => thing.id == id)  // bloody = vs == and === !!
                            // const thing = this.state.things.find(thing => thing.id == id)  // bloody = vs == and === !!
                            return <ThingView thing={thing} {...props} />
                        }
                    }} />
                    {/* <Route path='/thing/:id' blah="Blah" component={ThingView} /> */}
                    <Footer appState={this.state} {...this.props} />
                </div>
                {/* </React.Fragment> */}
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        things: state.things.things,
        errorMessage: state.errorMessage
    } // return only the properties we want, in a simple accessible way
}

const mapDispatchToProps = (dispatch) => {
    // console.log("mAPPING dispatch to props")
    return ({
        // object with properties for simple helper functions that call dispatch, keepting component code simpler
        fetchThings: () => {
            // console.log("About to fetch things")
            dispatch(fetchThings())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default connect(mapStateToProps)(App)
