import {EachCharacter, CharacterText} from './styledComponents'

const CharacterItem = props => {
  const {characterInfo} = props
  const {character} = characterInfo
  return (
    <EachCharacter>
      <CharacterText>
        {character} : {character.length}
      </CharacterText>
    </EachCharacter>
  )
}

export default CharacterItem
