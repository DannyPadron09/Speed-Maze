import React from 'react'
import Player from '../Player/PlayerIndex'
import ShowCourse from '../Course/ShowCourse.js'


class Stopwatch extends React.Component {
    
      state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      }

    startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        })
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          })
        }, 10)
      }

      stopTimer = () => {
        this.setState({ timerOn: false })
        clearInterval(this.timer)
      }

      resetTimer = () => {
        // reset player position
        // reset courseCompletion to false
        this.setState({
          timerStart: 0,
          timerTime: 0
        })
      }

      // when the timer stops it needs to trigger form
      // form then takes user input for username 
      // and `this.state.timerTime` as the value for 'highscore'

      //a function thats triggered when stopTimer is called
      showForm  = () => {
        if (this.state.timerOn === true) {
          return (
            <div>
              <ShowCourse />
              <Player />
            </div>
          )
        } 
      }

    render() {
        const { timerTime } = this.state
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        return (
          <>
            {this.showForm()}
              <div className='Stopwatch'>
                <div className='Stopwatch-header'>Stopwatch</div>
                    <div className='Stopwatch-display'>{minutes} : {seconds}
                        {this.state.timerOn === false && this.state.timerTime === 0 && (
                            <button onClick={this.startTimer}>Start</button>
                        )}
                        {this.state.timerOn === true && (
                            <button onClick={this.stopTimer}>Stop</button>
                        )}
                        {this.state.timerOn === false && this.state.timerTime > 0 && (
                            <button onClick={this.resetTimer}>Reset</button>
                        )}
                    </div>
            </div>
          </>
        )
    }
}


export default Stopwatch