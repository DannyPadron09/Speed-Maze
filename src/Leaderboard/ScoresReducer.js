export function playersHaveError(state = false, action) {
    switch (action.type) {
        case 'PLAYERS_HAVE_ERROR':
            return action.hasError

        default:
            return state
    }
}

export function playersAreLoading(state = false, action) {
    switch (action.type) {
        case 'PLAYERS_ARE_LOADING':
            return action.areLoading 

        default:
            return state 
    }
}

export function playersFetched(state = [], action) {
    switch (action.type) {
        case 'PLAYERS_FETCHED':
            return action.players 

        default:
            return state
    }
}