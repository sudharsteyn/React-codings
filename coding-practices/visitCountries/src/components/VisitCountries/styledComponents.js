import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 8px 58px;
  display: flex;
  flex-direction: column;
`

export const CountriesListContainer = styled.div``

export const SectionHeading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  margin: 0px;
  font-size: 28px;
`

export const CountriesItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 8px;
  height: 325px;
  overflow: auto;
`

export const VisitedCountryContainer = styled.div``

export const VisitedCountryItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const NoCountryContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoCountryText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
