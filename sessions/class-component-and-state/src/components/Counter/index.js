import React from 'react'
import './index.css'

class Count extends React.Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState({count: this.state.count + 1})
  }
  onDecrement = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Count</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Count
