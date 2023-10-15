import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textCount: 0}

  onChangeText = event => {
    this.setState({textCount: event.target.value.length})
  }

  render() {
    const {textCount} = this.state
    return (
      <div className="bg-container">
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="calculate-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label className="text-label" htmlFor="text-field">
              Enter the phrase
            </label>
            <br />
            <input
              onChange={this.onChangeText}
              className="input"
              id="text-field"
              type="text"
              placeholder="Enter the phrase"
            />
            <div className="count-container">
              <p className="no-of-letter">No.of letters: {textCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
