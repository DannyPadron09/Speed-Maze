import { createStore, combineReducers } from 'redux'
import playerReducer from './Player/playerReducer'
import CourseReducer from './Course/CourseReducer'

const rootReducer = combineReducers({
    player: playerReducer,
    course: CourseReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 