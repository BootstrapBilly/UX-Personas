import React from 'react'

import classes from "./Skill.module.css"

//redux hooks
import { useSelector } from "react-redux"

export const Skill = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>

            <span className={classes.name}>{data.skills[props.number][0]}</span>

            <div className={classes.circle_container}>

                {[1, 2, 3, 4, 5].map((circle, index) => 
                
                <div className={classes.circle} style={{borderColor:data.color_1, backgroundColor: data.skills[props.number][1] > index ? data.color_1 : null}}></div>
                )}

            </div>

        </div>
    )

}

export default Skill
