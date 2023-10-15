import './index.css'

const LanguageFilterItem = props => {
  const {languageData, activeTab, onChangeActiveTab} = props
  const {id, language} = languageData
  const activeTabClassName =
    activeTab === id ? 'language-btn selected-btn' : 'language-btn'
  const onTabClicked = () => {
    onChangeActiveTab(id)
  }
  return (
    <li className="language-item">
      <button
        className={activeTabClassName}
        onClick={onTabClicked}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
