import React from 'react'
import FetchScores from './FetchScores'


class ShowScores extends React.Component {

    render() {
        return (
            <div>
                <b>Leaderboard</b>
                <FetchScores />
            </div>
        )
    }
}

export default ShowScores 