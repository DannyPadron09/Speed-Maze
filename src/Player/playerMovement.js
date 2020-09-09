import store from '../store.js'
import { characterSize, mapHeight, mapWidth} from './playerSize'
import Popup from 'react-popup'
import Stopwatch from '../Leaderboard/Stopwatch'

export default function controlMovement(player) {
    

    function getNewPosition(previousPosition, direction) { 
        switch (direction) {
            case 'LEFT':
                return [previousPosition[0] - characterSize, previousPosition[1]]

            case 'RIGHT':
                return [previousPosition[0] + characterSize, previousPosition[1]]

            case 'UP':
                return [previousPosition[0], previousPosition[1] - characterSize]

            case 'DOWN':
                return [previousPosition[0], previousPosition[1] + characterSize]

            default:
                return [previousPosition[0], previousPosition[1]]
        }
    }

    function movingDirection(newPosition) {

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPosition  
            }
        })
    }

    function canWeMove(direction) {
        
        const previousPosition = store.getState().player.position 
        const newPosition = getNewPosition(previousPosition, direction)

        // if the newPosition is within the course `stayInCourse`
        // AND
        // if the newPosition is able to walk `avoidObstacles`
        // true = move player
        if (stayInCourse(newPosition) && avoidObstacles(newPosition))
            movingDirection(newPosition) 
    }

    function stayInCourse(newPosition) {
        // if newPosition is more than course width/height return previousPosition
        // if newPosition is less than course width/height return newPosition
        return (newPosition[0] >= 0 && newPosition[0] <= mapWidth - characterSize) && (newPosition[1] >= 0 && newPosition[1] <= mapHeight - characterSize)
    }

    function avoidObstacles(newPosition) {
        // if newPosition is not 0 return previousPosition
        // if newPosition is 0 return newPosition
        // ^to do i need to see the 'squares'
        const Squares = store.getState().course.Squares
        const x = newPosition[0] / characterSize
        const y = newPosition[1] / characterSize
        const nextSquare = Squares[y][x]
        if (nextSquare === 0)
            return true 
        
        if (nextSquare === 9)
            console.log('You win')
            // stop timer for leaderboard  
    }

    function handleKeyDown(e) {
        e.preventDefault()//keeps page from scrolling with key presses
        switch(e.keyCode) {
            case 37:
                return canWeMove('LEFT')

            case 38: 
                return canWeMove('UP')

            case 39:
                return canWeMove('RIGHT')

            case 40:
                return canWeMove('DOWN')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
        Stopwatch.startTimer()
    })
    return player
}