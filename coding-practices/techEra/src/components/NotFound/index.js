import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        className="no-found-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="no-found-heading">Page Not Found</h1>
      <p className="no-found-describe">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
