import React from 'react'
import CourseRow from './CourseRow'
import Squares from './Squares'


function ShowCourse(props) {
    return (
        <div id='board'>
            <div
                style={{
                    position: 'relative',
                    top: '0px',
                    left: '0px',
                    width: '800px',
                    height: '400px',
                    backgroundColor: '#373434',
                    border: '4px solid white'
                }}>

                {
                    Squares.map(eachRow => <CourseRow squares={eachRow} />)
                    // have to map each individual row
                    // then map each individual square inside the row
                    /* props.Squares.map(eachRow => <CourseRow squares={eachRow} />) */
                }
            </div>
        </div>
    )
}


export default (ShowCourse)