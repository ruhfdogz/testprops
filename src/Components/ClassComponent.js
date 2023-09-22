import React from "react"
import PropTypes from 'prop-types'

export default class ClassComponent extends React.Component {
static propTypes = {
    nom: PropTypes.string.isRequired
}

    constructor(props){
        super(props)
    }
    render() {
        if (this.props.nom.toUpperCase() === 'BENJAMIN') {
            return (
                <div>Quel beau gosse ce mec</div>
            )
        }
        return (
            <div>
                Coucou {this.props.nom}
            </div>
        )
    }
}

