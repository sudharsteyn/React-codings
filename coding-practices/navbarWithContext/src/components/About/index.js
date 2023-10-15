import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeMode = isDarkTheme ? 'dark-not-found-container' : ''
      const darkThemeText = isDarkTheme ? 'dark-theme-text' : ''
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home-container ${themeMode}`}>
            <img className="home-img" src={aboutImage} alt="about" />
            <h1 className={`home-heading ${darkThemeText}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
