import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, forksCount, issuesCount, starsCount, name} = repoDetails
  return (
    <li className="repo-item">
      <img className="repo-img" src={avatarUrl} alt={name} />
      <h1 className="repo-heading">{name}</h1>
      <div className="repo-all-info">
        <div className="repo-detailed-cont">
          <img
            className="repo-details-logo"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="details">{starsCount} stars</p>
        </div>
        <div className="repo-detailed-cont">
          <img
            className="repo-details-logo"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
            alt="forks"
          />
          <p className="details">{forksCount} forks</p>
        </div>
        <div className="repo-detailed-cont">
          <img
            className="repo-details-logo"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p className="details">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
