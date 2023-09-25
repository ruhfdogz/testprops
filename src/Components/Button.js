import PropTypes from 'prop-types'

function Button({ label, onClick }){
    return(
        <button onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string
}

Button.defaultProps = {
    label: "A définir"
}

export default Button