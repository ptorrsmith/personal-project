import React from 'react'

import { connect } from 'react-redux' // for dispatch only initially

import { createThing, addThing } from '../../actions/thingActions'

// could be functional component, but may in future need local state, e.g. selectedThings
class CreateThing extends React.Component {
    constructor(props) {
        // console.log("CreateThing constructor: props: ", props)
        super(props)
        // console.log("CreateTHing constructor prpos: ", props)

        // initial local state if needed
        this.state = {
            name: '',
            description: ''
        }

        // bind any local functions
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    // componentWillReceiveProps(props) {
    //     console.log("CreateThing componentWillReceiveProps props: ", this.props)
    // }

    handleChange(e) {
        console.log(e.target)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // dispatch all in local state to create new thing
        console.log("State: ", this.state)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Create Thing</h3>

                <form onSubmit={this.handleSubmit}>

                    <fieldset>
                        <legend>Create your thing</legend>

                        <label htmlFor="name">Name</label><br />
                        <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="description">Description</label><br />
                        <input id="description" name="description" value={this.state.description} onChange={this.handleChange} />

                        <button>Submit</button>

                    </fieldset>

                </form>


            </React.Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         things: state.things.things
//     } // return only the properties we want, in a simple accessible way
// }

const mapDispatchToProps = (dispatch) => {
    // console.log("mAPPING dispatch to props")
    return ({
        // object with properties for simple helper functions that call dispatch, keepting component code simpler
        createThing: (data) => {
            // console.log("About to fetch things")
            dispatch(addThing(data))
        }
    })
}

export default connect(null, mapDispatchToProps)(CreateThing)
                    // export default connect(mapStateToProps, mapDispatchToProps)(CreateThing)
                    // export default connect(mapStateToProps)(App)



