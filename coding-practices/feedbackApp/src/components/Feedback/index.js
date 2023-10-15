import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  onButtonClicked = () => {
    const emojiElement = document.getElementById('emojiCard')
    const thankElement = document.getElementById('thankCard')
    emojiElement.classList.toggle('d-none')
    thankElement.classList.toggle('d-none')
  }

  displayEmojis = () => {
    const {resources} = this.props
    console.log(resources.emojis)
    return resources.emojis.map(eachResource => (
      <li key={eachResource.id}>
        <button
          onClick={this.onButtonClicked}
          className="emoji-btn"
          type="button"
        >
          <img src={eachResource.imageUrl} alt={eachResource.name} />
          <p>{eachResource.name}</p>
        </button>
      </li>
    ))
  }

  render() {
    const {resources} = this.props
    return (
      <div className="bg-container">
        <div id="emojiCard" className="body-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emoji-list">{this.displayEmojis()}</ul>
        </div>
        <div id="thankCard" className="body-container d-none">
          <img src={resources.loveEmojiUrl} alt="love emoji" />
          <h1>Thank you</h1>
          <p>
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
