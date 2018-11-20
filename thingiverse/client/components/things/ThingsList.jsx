import React from 'react'

class ThingsList extends React.Component {
    constructor(props) {
        super(props)
        console.log("THingsList constructor prpos: ", props)
        this.state = {
            error: null,
            things: props.things,
            selectedThings: []
        }
    }

    componentWillReceiveProps(props) {
        console.log("ThingsList componentWillReceiveProps props: ", this.props)
    }

    render() {
        return(
            <React.Fragment>
                <p>List of {this.props.things.length} things to go here</p>
                {console.log("ThingsList.render: state", this.state.things.length, this.state)}
                {console.log("ThingsList.render: props appState: ", this.props.appState)}
                {console.log("ThingsList.render: props things: ", this.props.appState.things)}
            </React.Fragment>
        )
    }

}

export default ThingsList
