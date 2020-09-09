import React from 'react'
import CourseRow from './CourseRow'
import { connect } from 'react-redux'





function ShowCourse(props) {
    return (
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
                // have to map each individual row
                // then map each individual square inside the row
                props.Squares.map(eachRow => <CourseRow squares={eachRow} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Squares: state.course.Squares
    }
}

export default connect(mapStateToProps)(ShowCourse)