import React from 'react'
import Player from './Player/playerIndex'
import ShowCourse from './Course/ShowCourse.js'
import Squares from './Course/Squares'
import store from './store.js'
import ShowScores from './Leaderboard/ShowScores'

function World(props) {
    
    store.dispatch({type: 'ALL_SQUARES', payload: {
        Squares: Squares,
    }})

    return (
        <div style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
        }}>
            <ShowCourse />
            <Player /> 
            <ShowScores />
        </div>
    )
}

export default World 