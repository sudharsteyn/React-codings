import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AppContainer = styled.div`
  background-color: #1b1c22;
  height: 550px;
  width: 900px;
  display: flex;
`

export const TitleAndImageContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextEditorTitle = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`

export const EditorImage = styled.img`
  height: 300px;
  margin-bottom: 58px;
`

export const TextEditorContainer = styled.div`
  background-color: #25262c;
  width: 500px;
  margin: 18px;
  border-radius: 14px;
  border: 1px solid #334155;
`
export const TextOptionContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
`

export const OptionItem = styled.li``

export const BoldButton = styled.button`
  background-color: transparent;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  margin: 18px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ItalicButton = styled.button`
  background-color: transparent;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  margin: 18px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  margin: 18px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Separator = styled.hr`
  border: 1px solid #334155;
  margin: 0px;
`

export const TextArea = styled.textarea`
  font-family: 'Roboto';
  background-color: transparent;
  color: #f8fafc;
  font-size: 18px;
  height: 87%;
  width: 100%;
  padding: 18px;
  border: none;
  outline: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
