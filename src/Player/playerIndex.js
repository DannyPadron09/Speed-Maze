import React from 'react'
import { connect } from 'react-redux'
import playerWalk from './PlayerWalk.png'
import controlMovement from './PlayerMovement'

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${playerWalk}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px'
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.player 
    }
}

export default connect(mapStateToProps)(controlMovement(Player))
