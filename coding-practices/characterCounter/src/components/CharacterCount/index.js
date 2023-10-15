import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CharacterItem from '../CharacterItem'

import {
  BgContainer,
  AppContainer,
  CharactersContainer,
  AddCharacterContainer,
  HeadingSection,
  CountHeading,
  CharacterCountHeading,
  CharacterBody,
  NoCharacterContainer,
  NoCharacterImg,
  AddCharacterSection,
  CharacterInput,
  AddButton,
  CharacterItemList,
} from './styledComponents'

class CharacterCount extends Component {
  state = {charactersList: [], searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddCharacter = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newCharacter = {
      id: uuidv4(),
      character: searchInput,
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newCharacter],
      searchInput: '',
    }))
  }

  renderCharacters = charactersList => (
    <CharacterItemList>
      {charactersList.map(eachCharacter => (
        <CharacterItem key={eachCharacter.id} characterInfo={eachCharacter} />
      ))}
    </CharacterItemList>
  )

  renderNoCharacter = () => (
    <NoCharacterContainer>
      <NoCharacterImg
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </NoCharacterContainer>
  )

  render() {
    const {searchInput, charactersList} = this.state
    return (
      <BgContainer>
        <AppContainer>
          <CharactersContainer>
            <HeadingSection>
              <CountHeading>Count the characters like a Boss...</CountHeading>
            </HeadingSection>
            <CharacterBody>
              {charactersList.length > 0
                ? this.renderCharacters(charactersList)
                : this.renderNoCharacter()}
            </CharacterBody>
          </CharactersContainer>
          <AddCharacterContainer onSubmit={this.onAddCharacter}>
            <CharacterCountHeading>Character Counter</CharacterCountHeading>
            <AddCharacterSection>
              <CharacterInput
                onChange={this.onChangeSearchInput}
                value={searchInput}
                type="text"
                placeholder="Enter the Characters here"
              />
              <AddButton type="submit">Add</AddButton>
            </AddCharacterSection>
          </AddCharacterContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default CharacterCount
