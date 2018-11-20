import React from 'react'

import ThingRow from './ThingRow'

class ThingsList extends React.Component {
    constructor(props) {
        super(props)
        // console.log("THingsList constructor prpos: ", props)
        this.state = {
            error: null,
            // things: props.things,
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
                            <th>Daily rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.things.map(thing => {
                            return <ThingRow key={thing.id} thing={thing} />
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default ThingsList
