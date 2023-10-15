import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeMode = isDarkTheme ? 'dark-not-found-container' : ''
      const darkThemeText = isDarkTheme ? 'dark-theme-text' : ''
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home-container ${themeMode}`}>
            <img className="home-img" src={homeImage} alt="home" />
            <h1 className={`home-heading ${darkThemeText}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
