import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="crypto-item">
      <div className="currency-detail">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-price">{usdValue}</p>
      <p className="euro-price">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
