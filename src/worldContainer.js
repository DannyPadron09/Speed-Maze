import React from 'react'
import Player from './Player/PlayerIndex'
import ShowCourse from './Course/ShowCourse.js'
import Squares from './Course/Squares'
import store from './store.js'
import ShowScores from './Leaderboard/ShowScores'
import NavBar from './NavBar'
import Stopwatch from './Leaderboard/Stopwatch'
import HighScoreForm from './Leaderboard/HighScoreForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
            <Router>
                <Switch>
                    <Route exact path="/">
                        {/* <ShowCourse />
                        <Player /> */}
                        <Stopwatch />
                    </Route>
                    <Route path="/scoreform">
                        <HighScoreForm />
                    </Route>
                    <Route path="/highscores">
                        <ShowScores />
                    </Route>
                </Switch>
                <NavBar />
            </Router>
            <h3>How to play.</h3>
                <p>When ready click the start button and use the ARROW KEYS on your keyboard to guide your character through the maze and to the chest at the end. Try to be the fastest!!</p>
            {/* <Stopwatch /> */}
        </div>
    )
}

export default World 