import styled from 'styled-components'

export const Countries = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  padding: 20px;
  height: 66px;
`

export const CountryName = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 14px;
  margin: 0px;
`

export const VisitButton = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 5px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border-radius: 3px;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  margin-right: 10px;
`
