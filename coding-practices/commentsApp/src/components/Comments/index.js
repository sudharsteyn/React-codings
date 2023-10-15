import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    userName: '',
    comment: '',
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {userName, comment} = this.state
    const newComment = {
      id: uuidv4(),
      userName,
      comment,
      commentDate: formatDistanceToNow(new Date()),
      liked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      userName: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredComment = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentList: filteredComment})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, liked: !eachComment.liked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentList, userName, comment} = this.state
    console.log(commentList)
    return (
      <div>
        <div>
          <div>
            <h1>Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.addComment}>
              <input
                value={userName}
                onChange={this.onChangeUserName}
                type="text"
                placeholder="Your Name"
              />
              <br />
              <textarea
                value={comment}
                onChange={this.onChangeComment}
                rows="6"
                cols="20"
                placeholder="Your comment"
              />
              <br />
              <button type="submit">Add comment</button>
            </form>
            <hr />
          </div>
          <div>
            <p>
              <span>{commentList.length}</span> Comments
            </p>
            <ul>
              {commentList.map(eachComment => (
                <CommentItem
                  toggleLike={this.toggleLike}
                  deleteComment={this.deleteComment}
                  key={eachComment.id}
                  commentItem={eachComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
