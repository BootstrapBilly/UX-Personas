import React from 'react'

import classes from "./Three.module.css"

import Persona from "../../Shared components/Persona/Persona"

export const Three = props => {

    return (

        <div className={classes.container} style={{backgroundImage:`linear-gradient(to top right, ${props.color_1}, ${props.color_2})`}}>

            <Persona color_1={props.color_1} color_2={props.color_2}/>
            
        </div>

    )

}

export default Three
