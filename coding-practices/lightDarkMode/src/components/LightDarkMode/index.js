import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true, buttonText: 'Light Mode', currentMode: 'dark-mode'}

  changeMode = () => {
    let {isDarkMode, buttonText, currentMode} = this.state
    if (isDarkMode === true) {
      isDarkMode = false
      buttonText = 'Dark Mode'
      currentMode = 'dark-mode'
    } else {
      isDarkMode = true
      buttonText = 'Light Mode'
      currentMode = 'light-mode'
    }
    this.setState({isDarkMode, buttonText, currentMode})
  }

  render() {
    const {buttonText, currentMode} = this.state
    return (
      <div className="bg-container">
        <div className={currentMode}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} type="button" className="mode-btn">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
