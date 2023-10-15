import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppContainer = styled.div`
  height: 630px;
  width: 970px;
  display: flex;
`

export const CharactersContainer = styled.div`
  width: 50%;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  background-color: #ffc533;
`

export const HeadingSection = styled.div`
  background-color: #ffbf1f;
  height: 25%;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CharacterBody = styled.div`
  height: 68%;
  margin: 18px;
  overflow: auto;
`

export const NoCharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NoCharacterImg = styled.img`
  height: 300px;
  width: 400px;
`

export const CountHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 34px;
  margin: 0px;
  margin-left: 38px;
  margin-right: 38px;
`

export const AddCharacterContainer = styled.form`
  background-color: #0f172a;
  width: 50%;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CharacterCountHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffc533;
  font-size: 34px;
  margin-top: 38px;
  margin-bottom: 38px;
`

export const AddCharacterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`

export const CharacterInput = styled.input`
  font-family: 'Roboto';
  background-color: #ffffff;
  font-size: 14px;
  width: 300px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 12px;
`

export const AddButton = styled.button`
  font-family: 'Roboto';
  color: #475569;
  background-color: #ffc533;
  font-size: 14px;
  font-weight: 800;
  margin-left: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 4px;
`

export const CharacterItemList = styled.ul`
  list-style-type: none;
`
