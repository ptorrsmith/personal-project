import React from 'react'

import { connect } from 'react-redux' // for dispatch only initially

import { createThing, addThing } from '../../actions/thingActions'

// could be functional component, but may in future need local state, e.g. selectedThings
class CreateThing extends React.Component {
    constructor(props) {
        // console.log("CreateThing constructor: props: ", props)
        super(props)
        // console.log("CreateTHing constructor prpos: ", props)
        this.state = {

        }
    }

    // componentWillReceiveProps(props) {
    //     console.log("CreateThing componentWillReceiveProps props: ", this.props)
    // }

    render() {
        return (
            <React.Fragment>
                <p>A form will go here to create a thing</p>
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



