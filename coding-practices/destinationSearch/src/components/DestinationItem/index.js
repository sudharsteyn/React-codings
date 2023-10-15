import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationInfo} = this.props
    const {name, imgUrl} = destinationInfo
    return (
      <li className="destination-card">
        <img src={imgUrl} alt={name} className="image" />
        <p className="place-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
