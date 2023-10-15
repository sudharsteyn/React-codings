import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onEmojiClick = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
