import React from 'react'
import PreFooter from './preFooter'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
            <PreFooter />
            
            <footer>
                <p>&copy; 2018</p> 
                <p>Peter Torr Smith</p>
            </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
