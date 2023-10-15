import {
  Countries,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountriesItem = props => {
  const {countryDetails, onVisitCountry} = props
  const visitCountry = () => {
    onVisitCountry(countryDetails.id)
  }
  const renderVisitedPara = () => <VisitedText>Visited</VisitedText>
  const renderVisitButton = () => (
    <VisitButton onClick={visitCountry} type="button">
      Visit
    </VisitButton>
  )
  return (
    <Countries>
      <CountryName>{countryDetails.name}</CountryName>
      {countryDetails.isVisited ? renderVisitedPara() : renderVisitButton()}
    </Countries>
  )
}

export default CountriesItem
