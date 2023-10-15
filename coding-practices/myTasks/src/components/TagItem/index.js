import {Tag, TagButton, SelectedTag} from './styledComponents'

const TagItem = props => {
  const {tagDetail, onSelectTag, selectedTag} = props
  const {optionId, displayText} = tagDetail
  const onChangeTag = () => {
    onSelectTag(optionId)
  }
  const renderSelectedButton = () => (
    <SelectedTag onClick={onChangeTag} type="button">
      {displayText}
    </SelectedTag>
  )
  const renderButton = () => (
    <TagButton onClick={onChangeTag} type="button">
      {displayText}
    </TagButton>
  )
  return (
    <Tag>
      {selectedTag === optionId ? renderSelectedButton() : renderButton()}
    </Tag>
  )
}

export default TagItem
