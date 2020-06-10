import React from 'react'

import classes from "./Quote.module.css"

//redux hooks
import {useSelector} from "react-redux"

export const Quote = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container}>
            
            <span className={classes.quote} style={{color:data.color_1}}>{`"${data.quote}"`}</span>

        </div>
    )

}

export default Quote