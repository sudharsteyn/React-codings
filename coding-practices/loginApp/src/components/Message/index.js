import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {welcome} = this.props
    return <h1 className="welcome">{welcome}</h1>
  }
}

export default Message
