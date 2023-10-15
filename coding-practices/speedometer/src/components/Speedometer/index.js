import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed < 200) {
        speed += 10
      } else {
        speed = 200
      }
      return {speed}
    })
  }

  break = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed > 0) {
        speed -= 10
      } else {
        speed = 0
      }
      return {speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="meter-img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="current-speed">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.accelerate} className="acc-btn" type="submit">
            Accelerate
          </button>
          <button onClick={this.break} className="brk-btn" type="submit">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
