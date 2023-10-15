import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
