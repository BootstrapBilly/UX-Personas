import React , {useState} from 'react'

import classes from "./Persona.module.css"

//components
import LeftSegment from "./Components/Left_segment/Left_segment"
import RightSegment from "./Components/Right_segment/Right_segment"

//assets
import arrow from "../../../../icons/arrow.svg"

//external
import { Redirect } from 'react-router'

export const Persona = props => {

    const [redirect, set_redirect] = useState(false)

    const handle_back_click = () => {

        switch(props.type){

            case "1" :
                return set_redirect(3)
            case "2" :
                return set_redirect(1)
            case "3" :
                return set_redirect(2)
            default :
                return
        }

    }

    const handle_next_click = () => {

        switch(props.type){

            case "1" :
                return set_redirect(2)
            case "2" :
                return set_redirect(3)
            case "3" :
                return set_redirect(1)
            default :
                return
        }

    }

    return (

        <div className={classes.container}>

            <img src={arrow} alt={"Left navigation arrow"} className={classes.left_arrow} onClick={()=> handle_back_click()}/>

            <LeftSegment type={props.type} />

            <RightSegment type={props.type} />

            <img src={arrow} alt={"Right navigation arrow"} className={classes.right_arrow}  onClick={()=> handle_next_click()}/>

            {
                redirect === 1 ? <Redirect to={"/"}/>
                : redirect === 2 ? <Redirect to={"/two"}/>
                : redirect === 3 && <Redirect to={"/three"}/>
            }

        </div>
    )

}

export default Persona
