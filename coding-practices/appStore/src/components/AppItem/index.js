import './index.css'

const AppItem = props => {
  const {appInfo} = props
  const {appName, imageUrl} = appInfo
  return (
    <li className="app-item-container">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
