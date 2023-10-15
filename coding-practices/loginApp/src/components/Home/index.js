import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  handleLogin = () => {
    this.setState({isLogin: true})
  }

  handleLogout = () => {
    this.setState({isLogin: false})
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="login-card">
          {isLogin ? (
            <Message welcome="Welcome User" />
          ) : (
            <Message welcome="Please Login" />
          )}
          {isLogin ? (
            <Logout handleLogout={this.handleLogout} />
          ) : (
            <Login handleLogin={this.handleLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
