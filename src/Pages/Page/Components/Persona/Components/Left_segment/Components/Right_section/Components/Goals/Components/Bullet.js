import React from 'react'

import classes from "./Bullet.module.css"

//redux selectors
import {useSelector} from "react-redux"

export const Bullet = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>

            <div className={classes.bullet_point} style={{backgroundColor:data.color_1}}></div>
            <span>{props.name}</span>
            
        </div>

    )

}

export default Bullet