import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    const userInput = event.target.value.toLowerCase()
    this.setState({searchInput: userInput})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(eachDestination => {
      const destinationName = eachDestination.name.toLowerCase()
      return destinationName.includes(searchInput)
    })
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              className="search-input"
              onChange={this.onChangeSearch}
              type="search"
              value={searchInput}
              placeholder="search"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destination-container">
            {filteredList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationInfo={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
