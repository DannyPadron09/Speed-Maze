import React from 'react'
import CourseSquare from './CourseSquare'


function CourseRow(props) {
    return (
        <div className='row'>
            {props.squares.map(square => <CourseSquare square={square} />)}
        </div>
    )
}

export default CourseRow