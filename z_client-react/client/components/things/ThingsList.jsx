import React from 'react'


// This things list is stateful
//  to hold the list of selected things
// Things list comes from App
// 


class ThingsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            // things: props.things,
            selectedThings: []
        }

    }



    render() {
        return (
            <React.Fragment>
                <p>List of things to go here</p>
                <p>Id: {this.props.things[0].id}. Name: {this.props.things[0].name} </p>
            </React.Fragment>
        )
    }

}

export default ThingsList
