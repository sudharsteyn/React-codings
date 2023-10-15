import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  displayOptions = () =>
    countryAndCapitalsList.map(eachCountry => (
      <option
        value={eachCountry.id}
        key={eachCountry.id}
        name={eachCountry.capitalDisplayText}
      >
        {eachCountry.capitalDisplayText}
      </option>
    ))

  onCapitalChanged = event => {
    console.log(event.target.value)
    this.setState({selectedCapital: event.target.value})
  }

  getCountry = () => {
    const {selectedCapital} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCapital,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCapital} = this.state
    const country = this.getCountry()
    return (
      <div className="bg-container">
        <div className="country-and-capital">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              value={selectedCapital}
              id="countriesAndCapitals"
              onChange={this.onCapitalChanged}
            >
              {this.displayOptions()}
            </select>
            <label htmlFor="countriesAndCapitals">
              is capital of which country?
            </label>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
