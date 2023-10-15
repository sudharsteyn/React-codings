import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Failure from '../FailureView'
import CourseItem from '../CourseItem'

import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class TechEra extends Component {
  state = {courseData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/te/courses')
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        courseData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApi = () => {
    this.getCourseData()
  }

  renderSuccess = () => {
    const {courseData} = this.state
    return (
      <div className="course-container">
        <h1 className="heading">Courses</h1>
        <ul className="course-item-list">
          {courseData.map(eachCourse => (
            <CourseItem key={eachCourse.id} courseDetail={eachCourse} />
          ))}
        </ul>
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
      <div className="bg-container">
        <Header />
        {this.renderApiStatus()}
      </div>
    )
  }
}

export default TechEra
