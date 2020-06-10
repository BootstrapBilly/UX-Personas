import React from 'react'

import classes from "./Right_segment.module.css"

//redux hooks
import { useSelector } from "react-redux"

export const Right_segment = props => {

    const data = useSelector(state => state.data[props.type])

    return (

        <div className={classes.container} style={{ backgroundImage: `linear-gradient(to top right, ${data.color_1}, ${data.color_2})` }}>

            <div className={classes.demographics_container}>

                <div className={classes.age}>AGE : {data.age}</div>

                <div className={classes.other_demos}>

                    <div>{data.location}</div>
                    <div>{data.status}</div>

                </div>

            </div>

            <img src={require(`../../../../../../Img/${data.image}`)} alt="A university student" className={classes.image} />

        </div>
    )

}

export default Right_segment