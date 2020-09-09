import React from 'react'
import FetchScores from './FetchScores'
import Stopwatch from './Stopwatch'

class ShowScores extends React.Component {

    render() {
        return (
            <div>
                <Stopwatch />
                Leaderboard
                <FetchScores />
            </div>
        )
    }
}

export default ShowScores 