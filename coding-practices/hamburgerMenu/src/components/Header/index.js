import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          className="burger-btn"
          type="button"
        >
          <GiHamburgerMenu className="menu" />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <div>
            <button
              data-testid="closeButton"
              className="close-btn"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose />
            </button>
          </div>
          <div>
            <ul>
              <Link to="/">
                <li>
                  <AiFillHome />
                  <p>Home</p>
                </li>
              </Link>

              <Link to="/about">
                <li>
                  <BsInfoCircleFill />
                  <p>About</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
