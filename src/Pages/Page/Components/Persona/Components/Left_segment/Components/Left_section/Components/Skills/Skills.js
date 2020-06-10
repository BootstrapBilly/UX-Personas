import React from 'react'

import classes from './Skills.module.css'

//components
import Skill from "./Components/Skill"

//redux hooks
import {useSelector} from "react-redux"

export const Skills = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ color: data.color_1 }}>Skills</span>
            
            <div className={classes.skill_container}>

                <Skill type={props.type} number={0}/>
                <Skill type={props.type} number={1}/>
                <Skill type={props.type} number={2}/>

            </div>

        </div>
    )

}

export default Skills
