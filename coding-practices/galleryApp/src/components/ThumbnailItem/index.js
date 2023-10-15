import './index.css'

const Thumbnail = props => {
  const {thumbnailItem, imageSelected, isSelected} = props
  const {thumbnailUrl, thumbnailAltText} = thumbnailItem
  const selected = isSelected ? 'selected-thumbnail' : ''
  const onThumbnailSelect = () => {
    imageSelected(thumbnailItem)
  }
  return (
    <li>
      <button className="thumbnail-btn" type="button">
        <img
          onClick={onThumbnailSelect}
          className={`thumbnail-img ${selected}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnail
