import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div>
        <div>
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faq={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
