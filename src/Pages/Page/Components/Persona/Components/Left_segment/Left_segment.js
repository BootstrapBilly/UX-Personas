import React from 'react'

import classes from "./Left_segment.module.css"

//components
import LeftSection from "./Components/Left_section/Left_section"
import RightSection from "./Components/Right_section/Right_section"

//redux hooks
import {useSelector} from "react-redux"

export const Left_segment = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>

            <div className={classes.top_section_container}>

                <h1 className={classes.name} style={{ color: data.color_1 }}>{data.name} - <span style={{ color: data.color_2 }}>{data.occupation}</span></h1>

            </div>

            <div className={classes.main_content}>

                <LeftSection type={props.type} />
                <RightSection type={props.type} />

            </div>

        </div>

    )

}

export default Left_segment
