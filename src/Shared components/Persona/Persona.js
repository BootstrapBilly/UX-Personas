import React from 'react'

import classes from "./Persona.module.css"

//assets
import Student from "../../Img/student.png"

export const Persona = props => {

    return (

        <div className={classes.container}>

            <div className={classes.information}></div>

            <div className={classes.photo} style={{backgroundImage:`linear-gradient(to top right, ${props.color_1}, ${props.color_2})`}}>

                <img src={Student} alt="A university student" className={classes.image}/>

            </div>
            
        </div>

    )

}

export default Persona
