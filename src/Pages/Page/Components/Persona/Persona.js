import React from 'react'

import classes from "./Persona.module.css"

//components
import LeftSegment from "./Components/Left_segment/Left_segment"
import RightSegment from "./Components/Right_segment/Right_segment"

export const Persona = props => {

    return (

        <div className={classes.container}>

            <LeftSegment type={props.type}/>

            <RightSegment type={props.type}/>

        </div>
    )

}

export default Persona
