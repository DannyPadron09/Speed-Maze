import React from 'react'

class FetchScores extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            highScores: 0
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/usernames')
            .then(res => res.json())
            .then(usernames => {
                usernames.forEach(username => {
                    this.setState(username)
                })
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FetchScores 