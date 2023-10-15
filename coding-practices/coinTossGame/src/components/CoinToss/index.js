import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coin: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossClicked = () => {
    let {total, heads, tails, coin} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      total += 1
      heads += 1
      coin = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      total += 1
      tails += 1
      coin = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    this.setState({total, heads, tails, coin})
  }

  render() {
    const {total, heads, tails, coin} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="head-tail-img" src={coin} alt="toss result" />
          <button
            onClick={this.onTossClicked}
            className="toss-btn"
            type="button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
