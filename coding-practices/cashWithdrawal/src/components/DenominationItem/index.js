import './index.css'

const DenominationItem = props => {
  const {buttonInfo, buttonClicked} = props
  const {value, id} = buttonInfo
  const onButtonClick = () => {
    buttonClicked(id)
  }
  return (
    <li className="button-list">
      <button
        onClick={onButtonClick}
        className="denomination-btn"
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
