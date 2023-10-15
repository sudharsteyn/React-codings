import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  buttonClicked = id => {
    let {balance} = this.state
    switch (id) {
      case 1:
        balance -= 50
        break
      case 2:
        balance -= 100
        break
      case 3:
        balance -= 200
        break
      case 4:
        balance -= 500
        break
      default:
        break
    }

    this.setState({balance})
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="ui-container">
          <div className="user-profile">
            <div className="profile-pic">
              <p className="profile-initial">S</p>
            </div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="btn-info">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachList => (
              <DenominationItem
                buttonClicked={this.buttonClicked}
                key={eachList.id}
                buttonInfo={eachList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
