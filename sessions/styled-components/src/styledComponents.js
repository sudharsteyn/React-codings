import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => {
    console.log(props)
    return props.color
  }};
`
