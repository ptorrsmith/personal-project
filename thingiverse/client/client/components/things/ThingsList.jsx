import React from 'react'

class ThingsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            things: props.things,
            selectedThings: []
        }


    }



    render() {
        return(
            <React.Fragment>
                <p>List of things to go here</p>
                <p>Id: { this.state.things[0].id }. Name: { this.state.things[0].name } </p>
            </React.Fragment>
        )
    }

}

export default ThingsList
