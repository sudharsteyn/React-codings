import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const updatedCryptoData = cryptoData.map(eachCrypto => ({
      currencyLogo: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      euroValue: eachCrypto.euro_value,
      usdValue: eachCrypto.usd_value,
      id: eachCrypto.id,
    }))
    this.setState({cryptoData: updatedCryptoData, isLoading: false})
  }

  renderCryptoDetails = () => {
    const {cryptoData} = this.state
    return (
      <div className="crypto-tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-table">
          <div className="columns-title">
            <p className="column-name coin-type">Coin Type</p>
            <p className="column-name usd">USD</p>
            <p className="column-name euro">EURO</p>
          </div>
          <ul className="crypto-details">
            {cryptoData.map(eachData => (
              <CryptocurrencyItem key={eachData.id} cryptoDetails={eachData} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoDetails()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
