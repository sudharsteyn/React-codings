import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {handleLogin} = this.props
    return (
      <button onClick={handleLogin} className="login-btn" type="button">
        Login
      </button>
    )
  }
}

export default Login
