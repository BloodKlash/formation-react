import React, { Fragment } from 'react'



const Membre = ({nom, prenom, age, children}) => {
    
    return (
        <Fragment>
        <h1 className="test">{nom.toUpperCase()} : {age} </h1>
        {children ? <p> {children} </p> : <Fragment />}
        </Fragment>
    )
}

export default Membre