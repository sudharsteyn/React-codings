import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    let {mango} = this.state
    mango += 1
    this.setState({mango})
  }

  eatBanana = () => {
    let {banana} = this.state
    banana += 1
    this.setState({banana})
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="eat-count">{mango}</span> mangoes{' '}
            <span className="eat-count">{banana}</span> bananas
          </h1>
          <div className="main-container">
            <div className="fruit-container">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.eatMango} className="eat-btn" type="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.eatBanana}
                className="eat-btn"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
