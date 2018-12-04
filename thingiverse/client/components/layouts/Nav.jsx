import React from 'react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <nav className="navbar grid">
                <p className="navbar-item"><Link to={`/things/`}>Things</Link></p>
                <p className="navbar-item"><Link to={`/things/new`}>Add Thing</Link></p>
                {/* <p className="navbar-item"><Link to={`/`}>About</Link></p>         */}
            </nav>
        )
    }
}


export default Nav
