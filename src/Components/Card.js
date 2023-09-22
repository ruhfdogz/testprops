import React from "react"
import PropTypes from 'prop-types'
import Button from "./Button"

function Card({id, backgroundColor, children, hidden, maClass, ...props}){

    if (hidden) { console.log("On devrait cacher la carte")
    return null
}

    return(
        <div className={maClass} id={id} style={{backgroundColor : backgroundColor}}>
            <h2>Card id: {id}</h2>
            {children}
            <Button {...props}/>
        </div>

    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired
}

export default Card