import styled from 'styled-components'

export const DirectionList = styled.li`
  margin: 4px 8px;
`

export const DirectionButton = styled.button`
  background-color: ${props => (props.selected ? '#ffffff' : '#ffffff79')};
  opacity: ${props => (props.selected ? 1 : 0.5)};
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 10px 32px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
