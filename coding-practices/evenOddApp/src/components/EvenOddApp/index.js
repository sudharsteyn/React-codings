import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenOrOdd: 'Even'}

  increaseCount = () => {
    let {count, evenOrOdd} = this.state
    count += Math.ceil(Math.random() * 100)
    if (count % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }
    this.setState({count, evenOrOdd})
  }

  render() {
    const {count, evenOrOdd} = this.state
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-result">Count is {evenOrOdd}</p>
          <button
            onClick={this.increaseCount}
            className="increment-btn"
            type="button"
          >
            Increment
          </button>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
