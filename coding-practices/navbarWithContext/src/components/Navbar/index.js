import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeMode = isDarkTheme ? 'dark' : 'light'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeButtonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`nav-container ${themeMode}`}>
          <Link to="/">
            <img className="logo-img" src={websiteLogo} alt="website logo" />
          </Link>

          <ul className="nav-item-list">
            <Link className="nav-link" to="/">
              <li className={`nav-item ${themeMode}`}>Home</li>
            </Link>
            <Link className="nav-link" to="/about">
              <li className={`nav-item ${themeMode}`}>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            onClick={toggleTheme}
            className="theme-btn"
            type="button"
          >
            <img className="theme-img" src={themeButtonImage} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
