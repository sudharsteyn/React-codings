import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    repoItems: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getRepoItem()
  }

  getRepoItem = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeTab} = this.state
    const repoUrl = `https://apis.ccbp.in/popular-repos?languages=${activeTab}`
    const response = await fetch(repoUrl)

    if (response.ok) {
      const data = await response.json()
      const updatedRepoData = data.popular_repos.map(eachRepo => ({
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        name: eachRepo.name,
        starsCount: eachRepo.stars_count,
      }))
      this.setState({
        repoItems: updatedRepoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      console.log('Failed')
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeActiveTab = id => {
    this.setState({activeTab: id}, this.getRepoItem)
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepositoryItems = () => {
    const {repoItems} = this.state
    return (
      <ul className="repo-item-list">
        {repoItems.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
        ))}
      </ul>
    )
  }

  renderFailedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something Went Wrong</p>
    </>
  )

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoryItems()
      case apiStatusConstants.failure:
        return this.renderFailedView()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="popular-repo-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-filter-item-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              languageData={eachLanguage}
              activeTab={activeTab}
              onChangeActiveTab={this.onChangeActiveTab}
            />
          ))}
        </ul>
        {this.renderResult()}
      </div>
    )
  }
}

export default GithubPopularRepos
