import React from 'react'
import FetchScores from './FetchScores'
import Stopwatch from './Stopwatch'


class ShowScores extends React.Component {

    render() {
        // leaderboard should show top 10 scores 
        // in descending order highest -> lowest 
        return (
            <div>
                {/* <Stopwatch /><br></br> */}
                <b>Leaderboard</b>
                <FetchScores />
            </div>
        )
    }
}

export default ShowScores 