import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <img
        className="home-img"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
