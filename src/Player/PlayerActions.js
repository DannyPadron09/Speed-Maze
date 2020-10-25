export function movingDirection(newPosition) {
    return {
        type: 'MOVE_PLAYER',
        payload: {
            position: newPosition
        }
    }
}
