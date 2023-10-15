import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Project from '../Project'

import {
  BgContainer,
  Header,
  SiteLogo,
  ProjectContainer,
  ProjectCategory,
  CategoryOption,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescribe,
  RetryButton,
  ProjectItemList,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class ProjectShowcase extends Component {
  state = {
    selectedCategory: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
    projectData: [],
  }

  componentDidMount() {
    this.getProjectDetails()
  }

  getProjectDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {selectedCategory} = this.state
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${selectedCategory}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        projectData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getProjectDetails()
  }

  changeCategory = event => {
    this.setState(
      {selectedCategory: event.target.value},
      this.getProjectDetails,
    )
  }

  renderSuccess = () => {
    const {projectData} = this.state
    return (
      <ProjectItemList>
        {projectData.map(eachProject => (
          <Project key={eachProject.id} projectDetails={eachProject} />
        ))}
      </ProjectItemList>
    )
  }

  renderFailure = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescribe>
        We cannot seem to find the page you are looking for.
      </FailureDescribe>
      <RetryButton onClick={this.retryApiCall} type="button">
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderLoading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#328af2" height="50" width="50" />
    </LoaderContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    const {selectedCategory} = this.state
    return (
      <BgContainer>
        <Header>
          <SiteLogo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </Header>
        <ProjectContainer>
          <ProjectCategory
            onChange={this.changeCategory}
            value={selectedCategory}
          >
            {categoriesList.map(eachCategory => (
              <CategoryOption value={eachCategory.id} key={eachCategory.id}>
                {eachCategory.displayText}
              </CategoryOption>
            ))}
          </ProjectCategory>
          {this.renderApiStatus()}
        </ProjectContainer>
      </BgContainer>
    )
  }
}

export default ProjectShowcase
