import React from 'react'

import classes from "./Right_section.module.css"

import {useSelector} from "react-redux"

export const Right_section = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{ borderColor: data.color_1 }}>
            Right

        </div>

    )

}

export default Right_section