import React from 'react'

import classes from "./Page.module.css"

//components
import Persona from "./Components/Persona/Persona"

//redux hooks
import {useSelector} from "react-redux"

export const Three = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{ backgroundImage: `linear-gradient(to top right, ${data.color_1}, ${data.color_2})` }}>

           <Persona type={props.type} />

        </div>

    )

}

export default Three
