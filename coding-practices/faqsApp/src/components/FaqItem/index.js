import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showHide: false}

  showHideClicked = () => {
    this.setState(prevState => ({showHide: !prevState.showHide}))
  }

  showAnswer = () => {
    const {faq} = this.props
    const {answerText} = faq
    return (
      <div>
        <hr />
        <p>{answerText}</p>
      </div>
    )
  }

  render() {
    const {showHide} = this.state
    const {faq} = this.props
    const {questionText} = faq
    const btnImage = showHide
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const btnAlt = showHide ? 'minus' : 'plus'
    return (
      <li>
        <div>
          <h1>{questionText}</h1>
          <button onClick={this.showHideClicked} type="button">
            <img src={btnImage} alt={btnAlt} />
          </button>
        </div>
        {showHide && this.showAnswer()}
      </li>
    )
  }
}

export default FaqItem
