import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="count">{count}</span> times
        </h1>
        <p className="btn-describe">Click the button to increase the count!</p>
        <button
          type="button"
          className="click-btn"
          onClick={this.increaseCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
