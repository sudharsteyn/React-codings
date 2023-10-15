import {TabItem, TabButton} from './styledComponents'

const LanguageTab = props => {
  const {tabDetail, onChangeTab} = props
  const {id, buttonText} = tabDetail
  const changeTab = () => {
    onChangeTab(id)
  }
  return (
    <TabItem>
      <TabButton onClick={changeTab} type="button">
        {buttonText}
      </TabButton>
    </TabItem>
  )
}

export default LanguageTab
