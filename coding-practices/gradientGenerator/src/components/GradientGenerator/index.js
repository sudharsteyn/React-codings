import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  SubHeading,
  DirectionItemList,
  ColorPickContainer,
  ColorContainer,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {color1, color2, direction} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        color1={color1}
        color2={color2}
        direction={direction}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <DirectionItemList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              direction={eachDirection}
              currentDirection={direction}
              changeDirection={this.changeDirection}
            />
          ))}
        </DirectionItemList>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorPickContainer>
          <ColorContainer>
            <Label htmlFor="color1">{color1}</Label>
            <Input
              onChange={this.onChangeColor1}
              id="color1"
              value={color1}
              type="color"
            />
          </ColorContainer>
          <ColorContainer>
            <Label htmlFor="color2">{color2}</Label>
            <Input
              onChange={this.onChangeColor2}
              id="color2"
              value={color2}
              type="color"
            />
          </ColorContainer>
        </ColorPickContainer>
        <GenerateButton>Generate</GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
