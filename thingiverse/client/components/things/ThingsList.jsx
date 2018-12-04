import React from 'react'

import ThingRow from './ThingRow'

import { connect } from 'react-redux'

// could be functional component, but may in future need local state, e.g. selectedThings
class ThingsList extends React.Component {
    constructor(props) {
        // console.log("ThingsList constructor: props: ", props)
        super(props)
        // console.log("THingsList constructor prpos: ", props)
        this.state = {
            error: null,
            // things: props.things,
            things: [],
            selectedThings: []
        }
    }

    // componentWillReceiveProps(props) {
    //     console.log("ThingsList componentWillReceiveProps props: ", this.props)
    // }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.things && this.props.things.map(thing => {
                            // console.log("ThingsList render thing: ", thing)
                            return <ThingRow key={thing.id} thing={thing} />
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        things: state.things.things
    } // return only the properties we want, in a simple accessible way
}

// const mapDispatchToProps = (dispatch) => {
//     // console.log("mAPPING dispatch to props")
//     return ({
//         // object with properties for simple helper functions that call dispatch, keepting component code simpler
//         fetchThings: () => {
//             // console.log("About to fetch things")
//             dispatch(fetchThings())
//         }
//     })
// }

export default connect(mapStateToProps)(ThingsList)
// export default connect(mapStateToProps, mapDispatchToProps)(ThingsList)
// export default connect(mapStateToProps)(App)



