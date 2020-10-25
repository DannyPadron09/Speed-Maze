
export function playersHaveError(boo) {
    return {
        type: 'PLAYERS_HAVE_ERROR',
        hasError: boo
    }
}

export function playersAreLoading(boo) {
    return {
        type: 'PLAYERS_ARE_LOADING',
        areLoading: boo
    }
}

export function playersFetched(players) {
    return {
        type: 'PLAYERS_FETCHED',
        players
    }
}

export function fetchPlayers(url) {
    return (dispatch) => {
        dispatch(playersAreLoading(true))

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }

                dispatch(playersAreLoading(false))

                return res 
            })
            .then((res) => res.json())
            .then((players) => dispatch(playersFetched(players)))
            .catch(() => dispatch(playersHaveError(true)))
    }
}
