import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        className="app-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="logo-name">Wave</p>
    </div>
    <ul className="nav-items">
      <li>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
