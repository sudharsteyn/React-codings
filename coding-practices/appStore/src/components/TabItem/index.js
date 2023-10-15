import './index.css'

const TabItem = props => {
  const {tabItem, isSelected, clickTabItem} = props
  const {displayText, tabId} = tabItem
  const selectedTabClassName = isSelected ? 'selected-tab' : ''
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className>
      <button
        onClick={onClickTabItem}
        className={`tab-btn ${selectedTabClassName}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
