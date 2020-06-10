import React from 'react'

import classes from "./Bio.module.css"

//redux hooks
import {useSelector} from "react-redux"

export const Bio = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{color: data.color_1}}>Bio</span>

            <p className={classes.bio}>{data.bio}</p>
            
        </div>

    )

}

export default Bio
