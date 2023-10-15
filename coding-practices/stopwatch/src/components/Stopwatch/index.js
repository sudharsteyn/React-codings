import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {countMinutes: 0, countSeconds: 0}

  timerId = null

  startTimer = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.timer, 1000)
    }
  }

  timer = () => {
    let {countMinutes, countSeconds} = this.state
    countSeconds += 1
    if (countSeconds >= 60) {
      countSeconds = 0
      countMinutes += 1
    }
    this.setState({countMinutes, countSeconds})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.timerId = null
    this.setState({countMinutes: 0, countSeconds: 0})
  }

  render() {
    const {countMinutes, countSeconds} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer">
            <img
              className="timer-icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer-count">
            {countMinutes < 10 ? `0${countMinutes}` : countMinutes}:
            {countSeconds < 10 ? `0${countSeconds}` : countSeconds}
          </h1>
          <div className="btn-container">
            <button
              onClick={this.startTimer}
              className="timer-btn start"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              className="timer-btn stop"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              className="timer-btn reset"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
