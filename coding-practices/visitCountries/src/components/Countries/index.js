import {
  CountriesItem,
  CountryImg,
  NameAndRemoveContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const Countries = props => {
  const {countryDetails, onRemoveCountry} = props
  const {id, imageUrl, name} = countryDetails
  const removeCountry = () => {
    onRemoveCountry(id)
  }
  return (
    <CountriesItem>
      <CountryImg src={imageUrl} alt="thumbnail" />
      <NameAndRemoveContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton onClick={removeCountry} type="button">
          Remove
        </RemoveButton>
      </NameAndRemoveContainer>
    </CountriesItem>
  )
}

export default Countries
