import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
`
export const DirectionItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ColorPickContainer = styled.div`
  display: flex;
`

export const ColorContainer = styled.div`
  margin: 8px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 18px;
`

export const Input = styled.input`
  width: 100px;
  height: 40px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding: 12px 28px;
  margin: 18px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
