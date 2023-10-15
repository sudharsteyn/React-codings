import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="lef-navbar">
              <h1>Left Navbar Menu</h1>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
              <p>Item 5</p>
            </div>
          )}
          {showContent && (
            <div className="body-content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h1>Right Navbar</h1>
              <div className="ad-cart">
                <p>Ad 1</p>
              </div>
              <div className="ad-cart">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
