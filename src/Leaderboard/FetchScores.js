import React from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from './ScoresActions'
// import UpvoteButtons from './UpvoteButton'


class FetchScores extends React.Component {

    componentDidMount() {
        console.log('a')
        this.getPlayers()
        console.log('b')
    }

    getPlayers() {
        this.props.fetchPlayers('http://localhost:3000/players')
    }

    render() {
            let sortedPlayers = this.props.playersFetched

            if (sortedPlayers) {
                sortedPlayers.sort((a, b) => a.highScore - b.highScore)
                console.log(sortedPlayers)
            } else {
                return <p>Loading...</p>
            }

           
            return (
                <div>
                <div id="container">
                    <ul>
                        {sortedPlayers.map((player) => (
                            <li key={player.id}>{player.name} - {player.highScore}</li>
                        ))}
                    </ul>
                </div> 
            </div>
            )
        }
    
}


const mapStateToProps = (state) => {
    return {
        playersFetched: state.playersFetched,
        hasError: state.playersHaveError,
        areLoading: state.playersAreLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: (url) => 
        dispatch(fetchPlayers(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchScores)
