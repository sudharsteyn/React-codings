import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const generatedNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: generatedNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-card">
          <h1 className="heading">Random Number</h1>
          <p className="info">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateRandomNumber}
            className="generate-btn"
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
