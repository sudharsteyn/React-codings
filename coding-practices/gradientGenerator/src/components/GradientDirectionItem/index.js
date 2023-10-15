import {DirectionList, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, currentDirection, changeDirection} = props
  const isSelected = currentDirection === direction.value
  const onClickChangeDirection = () => {
    changeDirection(direction.value)
  }
  return (
    <DirectionList>
      <DirectionButton
        onClick={onClickChangeDirection}
        type="button"
        selected={isSelected}
      >
        {direction.displayText}
      </DirectionButton>
    </DirectionList>
  )
}

export default GradientDirectionItem
