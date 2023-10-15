import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {handleLogout} = this.props
    return (
      <button onClick={handleLogout} className="logout-btn" type="button">
        Logout
      </button>
    )
  }
}

export default Logout
