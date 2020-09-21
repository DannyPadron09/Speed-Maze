import React, { Component } from 'react'

class HighScoreForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            highScore: 0
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleHighscoreChange = (e) => {
        this.setState({
            highScore: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/players', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
        .then(res => res.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
        this.setState({
            name: '',
            highScore: 0
        })
    }

    render() {
        return (
            // connect form to store, import high score to form highscore value
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Username</label>
                        <input type='text' onChange={(e) => this.handleUsernameChange(e)} value={this.state.name} />
                        <label>High Score</label>
                        <input type='text' onChange={(e) => this.handleHighscoreChange(e)} value={this.state.highScore} />
                    </p>
                    <input type='submit' />                    
                </form>
            </div>
        )
    }
}

export default HighScoreForm
