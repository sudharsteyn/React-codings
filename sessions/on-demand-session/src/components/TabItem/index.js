import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTabSelected = () => {
    selectTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onTabSelected}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
