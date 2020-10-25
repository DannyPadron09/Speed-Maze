import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import playerReducer from './Player/PlayerReducer'
import { playersAreLoading, playersHaveError, playersFetched } from './Leaderboard/ScoresReducer'

const rootReducer = combineReducers({
    player: playerReducer,
    playersAreLoading,
    playersHaveError,
    playersFetched
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(
//     rootReducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// )

export default store 