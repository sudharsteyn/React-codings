import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configuration-controller-container">
          <h1 className="layout-text">Layout</h1>
          <ul className="nav-item-list">
            <li className="nav-item">
              <input
                onChange={onToggleShowContent}
                id="content"
                type="checkbox"
                checked={showContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </li>
            <li className="nav-item">
              <input
                onChange={onToggleShowLeftNavbar}
                id="left-navbar"
                type="checkbox"
                checked={showLeftNavbar}
              />
              <label className="label-text" htmlFor="left-navbar">
                Left Navbar
              </label>
            </li>
            <li className="nav-item">
              <input
                onChange={onToggleShowRightNavbar}
                id="right-navbar"
                type="checkbox"
                checked={showRightNavbar}
              />
              <label className="label-text" htmlFor="right-navbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
