import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeMode = isDarkTheme ? 'dark-not-found-container' : ''
      const darkThemeText = isDarkTheme ? 'dark-theme-text' : ''
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${themeMode}`}>
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`not-found-heading ${darkThemeText}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-describe ${darkThemeText}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
