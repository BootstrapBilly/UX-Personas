import React from 'react'

import classes from "./Bullets.module.css"

//components
import Bullet from "./Components/Bullet"

//redux selectors
import {useSelector} from "react-redux"

export const Bullets = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{marginTop:props.margin_top}}>

            <span className={classes.title} style={{ color: data.color_1 }}>{props.title}</span>

            <div className={classes.bullet_container}>

                {data[props.bullet_type].map(item => <Bullet type={props.type} name={item} key={item} />)}
                
            </div>

        </div>
    )

}

export default Bullets
