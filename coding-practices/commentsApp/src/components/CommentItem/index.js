import './index.css'

const CommentItem = props => {
  const {commentItem, deleteComment, toggleLike} = props
  const {id, userName, comment, commentDate, liked} = commentItem
  const initial = userName.slice(0, 1)
  const onDelete = () => {
    deleteComment(id)
  }
  const likeIcon = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = liked ? 'liked' : ''

  const onLikeClicked = () => {
    toggleLike(id)
  }

  return (
    <li>
      <div className="user-detail">
        <p>{initial}</p>
        <p>{userName}</p>
        <p>{commentDate}</p>
      </div>
      <p>{comment}</p>
      <div className="like-and-delete-container">
        <button onClick={onLikeClicked} className="like-btn" type="button">
          <img src={likeIcon} alt="like" />
          <p className={likeText}>Like</p>
        </button>
        <button data-testid="delete" onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
