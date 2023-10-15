import styled from 'styled-components'

export const CountriesItem = styled.li`
  width: 260px;
  margin-bottom: 6px;
  margin-right: 6px;
  background-color: #1f1f2f;
`

export const CountryImg = styled.img`
  width: 100%;
`

export const NameAndRemoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const CountryName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  margin: 0px;
`

export const RemoveButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  font-size: 12px;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`
