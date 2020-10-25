import React from 'react'
import { connect } from 'react-redux'
import playerWalk from './PlayerWalk.png'
import Squares from '../Course/Squares'
import { movingDirection } from './PlayerActions'


class Player extends React.Component {

    characterSize = 40
    courseHeight = 400
    courseWidth = 800

    handleKeyDown = (e) => {
        // only prevents default on arrow keys 
        if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
            e.preventDefault()
        }//keeps page from scrolling with key presses
        switch(e.keyCode) {
            case 37:
                return this.canWeMove('LEFT')

            case 38: 
                return this.canWeMove('UP')

            case 39:
                return this.canWeMove('RIGHT')

            case 40:
                return this.canWeMove('DOWN')

            default:
                console.log(e.keyCode)
        }
    }

    canWeMove = (direction) => {
        // const previousPosition = store.getState().player.position
        const newPosition = this.getNewPosition(this.props.position, direction)
        // if the newPosition is within the course `stayInCourse`
        // AND
        // if the newPosition is able to walk `avoidObstacles`
        // true = move player
        if (this.stayInCourse(newPosition) && this.avoidObstacles(newPosition))
            (this.props.movePlayer(newPosition))
    }

    getNewPosition = (previousPosition, direction) => { 
        switch (direction) {
            case 'LEFT':
                return [previousPosition[0] - this.characterSize, previousPosition[1]]

            case 'RIGHT':
                return [previousPosition[0] + this.characterSize, previousPosition[1]]

            case 'UP':
                return [previousPosition[0], previousPosition[1] - this.characterSize]

            case 'DOWN':
                return [previousPosition[0], previousPosition[1] + this.characterSize]

            default:
                return [previousPosition[0], previousPosition[1]]
        }
    }

    stayInCourse = (newPosition) => {
        // if newPosition is more than course width/height return previousPosition
        // if newPosition is less than course width/height return newPosition
        return (newPosition[0] >= 0 && newPosition[0] <= this.courseWidth - this.characterSize) && (newPosition[1] >= 0 && newPosition[1] <= this.courseHeight - this.characterSize)
    }

    avoidObstacles = (newPosition) => {
        // if newPosition is not 0 return previousPosition
        // if newPosition is 0 return newPosition
        // ^to do i need to see the 'squares'
        // const Squares = store.getState().course.Squares
        const x = newPosition[0] / this.characterSize
        const y = newPosition[1] / this.characterSize
        const nextSquare = Squares[y][x]
        if (nextSquare === 0)
            return true
            
        
        if (nextSquare === 9)
            // return <HighScoreForm />
            alert('You win! Enter your time in the HighScores!')
            // stop timer for leaderboard  
    }

    render() {

        return (
            <div    
                style={{
                    position: 'absolute',
                    top: this.props.position[1],
                    left: this.props.position[0],
                    backgroundImage: `url('${playerWalk}')`,
                    backgroundPosition: '0 0',
                    width: '40px',
                    height: '40px'
                }}
            />
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        })
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.player.position
    }
}

const mapDispatchToProps = dispatch => {
    return {
        movePlayer: (position) => dispatch(movingDirection(position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
