import React from 'react'

import classes from "./Left_section.module.css"

//components
import Bio from "./Components/Bio/Bio"
import Skills from "./Components/Skills/Skills"
import Quote from "./Components/Quote/Quote"

//redux hooks
import {useSelector} from "react-redux"

export const Left_section = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{ borderColor: data.color_1 }}>
            
            <Bio type={props.type} />
            <Skills type={props.type} />
            <Quote type={props.type} />

        </div>

    )

}

export default Left_section
