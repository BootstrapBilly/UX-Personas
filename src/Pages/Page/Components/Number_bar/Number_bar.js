import React, {useState} from 'react'

import classes from "./Number_bar.module.css"

import {Redirect} from "react-router"

export const Number_bar = props => {

    const [redirect, set_redirect] = useState([])

    const handle_click = (number) => {

        let direction;

        number > props.type ? direction = "right" : direction = "left"

        return set_redirect([number, direction])

    }

    return (

        <div className={classes.container}>

            {[1, 2, 3, 4].map(number =>

                <span className={classes.number} key={number}

                    onClick={()=> handle_click(number)}

                    style={{
                        color: parseInt(props.type) === number && "white",
                        fontWeight: parseInt(props.type) === number && "bold"
                    }}>

                    {number}

                </span>)}

                {
                redirect[0] === 1 ? <Redirect to={{ pathname: '/', state: { direction:redirect[1] } }}/>
                : redirect[0] === 2 ? <Redirect to={{ pathname: '/two', state: { direction:redirect[1] } }}/>
                : redirect[0] === 3 ? <Redirect to={{ pathname: '/three', state: { direction:redirect[1] } }}/>
                : redirect[0] === 4 && <Redirect to={{ pathname: '/four', state: { direction:redirect[1] } }}/>
            }
        </div>

    )

}

export default Number_bar