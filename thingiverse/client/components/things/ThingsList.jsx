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

    componentDidMount() {
        console.log("ThingsList componentDidMount state: ", this.state)
        console.log("ThingsList componentDidMount props: ", this.props)
        this.setState({ things: this.props.things })
    }

    componentWillReceiveProps(props) {
        console.log("ThingsList componentWillReceiveProps state: ", this.state)
        console.log("ThingsList componentWillReceiveProps props: ", this.props)
        this.setState({ things: this.props.things })
    }

    render() {
        return(
            <React.Fragment>
                <p>List of {this.state.things.length} things to go here</p>
                {console.log("ThingsList.render: state", this.state.things.length, this.state)}
                {console.log("ThingsList.render: props appState: ", this.props.appState)}
                {console.log("ThingsList.render: props things: ", this.props.appState.things)}
            </React.Fragment>
        )
    }

}

export default ThingsList
