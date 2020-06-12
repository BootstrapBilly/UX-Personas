import React, { useState } from 'react'

import classes from "./Persona.module.css"

//components
import LeftSegment from "./Components/Left_segment/Left_segment"
import RightSegment from "./Components/Right_segment/Right_segment"

//assets
import arrow from "../../../../icons/arrow.svg"

//external
import { Redirect } from 'react-router'
import { motion } from "framer-motion"

//util
import { transition, duration } from "../../../../util/page_transitions"

export const Persona = props => {

    const [redirect, set_redirect] = useState([])
    const [current_direction, set_current_direction] = useState(props.location.state ? props.location.state.direction : null)

    const handle_back_click = () => {

        set_current_direction("left")

        switch (props.type) {

            case "1":
                return set_redirect([4, "left"])
            case "2":
                return set_redirect([1, "left"])
            case "3":
                return set_redirect([2, "left"])
            case "4":
                return set_redirect([3, "left"])
            default:
                return
        }

    }

    const handle_next_click = () => {

        set_current_direction("right")

        switch (props.type) {

            case "1":
                return set_redirect([2, "right"])
            case "2":
                return set_redirect([3, "right"])
            case "3":
                return set_redirect([4, "right"])
            case "4":
                return set_redirect([1, "right"])
            default:
                return
        }

    }

    return (

        <motion.div className={classes.container}
            initial={current_direction === "left" ? "left_initial" : "initial"}
            animate={current_direction === "left" ? "left_in" : "in"}
            exit={current_direction === "left" ? "left_out" : "out"}
            variants={transition}
            transition={duration}>

            <img src={arrow} alt={"Left navigation arrow"} className={classes.left_arrow} onClick={() => handle_back_click()} />

            <LeftSegment type={props.type} />

            <RightSegment type={props.type} />

            <img src={arrow} alt={"Right navigation arrow"} className={classes.right_arrow} onClick={() => handle_next_click()} />


            {
                redirect[0] === 1 ? <Redirect to={{ pathname: '/', state: { direction: redirect[1] } }} />
                    : redirect[0] === 2 ? <Redirect to={{ pathname: '/two', state: { direction: redirect[1] } }} />
                        : redirect[0] === 3 ? <Redirect to={{ pathname: '/three', state: { direction: redirect[1] } }} />
                            : redirect[0] === 4 && <Redirect to={{ pathname: '/four', state: { direction: redirect[1] } }} />
            }



        </motion.div>
    )

}

export default Persona
