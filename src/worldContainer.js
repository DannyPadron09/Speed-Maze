import React from 'react'
import ShowScores from './Leaderboard/ShowScores'
import NavBar from './NavBar'
import Stopwatch from './Leaderboard/Stopwatch'
import HighScoreForm from './Leaderboard/HighScoreForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import FetchScores from './Leaderboard/FetchScores'


function World(props) {

    

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
                        <Stopwatch />
                    </Route>
                    <Route path="/scoreform">
                        <HighScoreForm />
                    </Route>
                    <Route path="/highscores">
                        <FetchScores />
                    </Route>
                </Switch>
                <NavBar />
            </Router>
            <h3>How to play.</h3>
                <p>When ready click the start button and use the ARROW KEYS on your keyboard to guide your character through the maze and to the chest at the end. Try to be the fastest!!</p>
        </div>
    )

} 


export default connect()(World)



