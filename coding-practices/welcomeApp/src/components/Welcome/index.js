import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, buttonText: 'Subscribe'}

  changeText = () => {
    let {isSubscribed, buttonText} = this.state
    if (isSubscribed === true) {
      buttonText = 'Subscribe'
      isSubscribed = false
    } else {
      buttonText = 'Subscribed'
      isSubscribed = true
    }
    this.setState({isSubscribed, buttonText})
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <button onClick={this.changeText} type="button" className="sub-btn">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
