import React from 'react'
import ShowSquare from './ShowSquare'
const characterSize = 40

function CourseSquare(props) {
    return ( 
        // displays squares
        <div className={`square ${ShowSquare(props.square)}`} style={{height: characterSize, width: characterSize}}>
            {props.square} 
        </div>
    )
}

export default CourseSquare 