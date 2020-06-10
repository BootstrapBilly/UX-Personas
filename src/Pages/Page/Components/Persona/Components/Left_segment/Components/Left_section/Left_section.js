import React from 'react'

import classes from "./Left_section.module.css"

import {useSelector} from "react-redux"

export const Left_section = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{ borderColor: data.color_1 }}>
            Left

        </div>

    )

}

export default Left_section
