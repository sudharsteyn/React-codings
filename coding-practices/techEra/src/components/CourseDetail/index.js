import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Failure from '../FailureView'

import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class CourseDetail extends Component {
  state = {apiStatus: apiStatusConstants.initial, courseDetail: {}}

  componentDidMount() {
    this.getCourseDetail()
  }

  getCourseDetail = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        courseDetail: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApi = () => {
    this.getCourseDetail()
  }

  renderSuccess = () => {
    const {courseDetail} = this.state
    const {imageUrl, name, description} = courseDetail
    return (
      <div className="course-details-container">
        <img className="course-detail-img" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="course-detail-heading">{name}</h1>
          <p className="course-detail-describe">{description}</p>
        </div>
      </div>
    )
  }

  renderFailure = () => <Failure retryCall={this.retryApi} />

  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#4656a1" height="50" width="50" />
    </div>
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
    return (
      <div>
        <Header />
        {this.renderApiStatus()}
      </div>
    )
  }
}

export default CourseDetail
