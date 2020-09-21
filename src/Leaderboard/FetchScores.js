import React from 'react'

class FetchScores extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/players')
            .then(res =>  {
                return res.json()
            })
            .then(playersList => {
                this.setState({ players: playersList })
            })

    }

    render() {
        let sortedPlayers = this.state.players.sort((a, b) => a.highScore - b.highScore)
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

export default FetchScores
