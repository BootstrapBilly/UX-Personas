import React from 'react'

import classes from "./Right_section.module.css"

//components
import Bullets from "./Components/Goals/Bullets"

export const Right_section = props => {

    return (

        <div className={classes.container}>
            
            <Bullets type={props.type} title="Goals" bullet_type="goals"/>
            <Bullets type={props.type} title="Frustrations" bullet_type="frustrations" margin_top="10px"/>
            <Bullets type={props.type} title="Environment" bullet_type="environment"/>

        </div>

    )

}

export default Right_section