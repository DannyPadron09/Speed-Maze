
import './courseStyle.css'

function ShowSquare(type) {
    switch(type) {
        case 0:
            return 'FLOOR'
        case 1:
            return 'CHEST'
        case 2:
            return 'ROCK'
        case 3: 
            return 'TREE'
        default:
            return 'FLOOR'
    }
}

export default ShowSquare 