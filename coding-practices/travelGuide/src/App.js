import {Component} from 'react'
import Loader from 'react-loader-spinner'

import GuideItem from './components/GuideItem'

import './App.css'

import {
  BgContainer,
  Heading,
  LoadingContainer,
  TravelGuideItemList,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

// Replace your code here
class App extends Component {
  state = {travelData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTravelGuideLocations()
  }

  getTravelGuideLocations = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      name: eachPackage.name,
      imageUrl: eachPackage.image_url,
      description: eachPackage.description,
    }))
    this.setState({
      apiStatus: apiStatusConstants.success,
      travelData: updatedData,
    })
  }

  renderTravelGuide = () => {
    const {travelData} = this.state
    return (
      <TravelGuideItemList>
        {travelData.map(eachData => (
          <GuideItem key={eachData.id} guideData={eachData} />
        ))}
      </TravelGuideItemList>
    )
  }

  renderLoading = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoadingContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelGuide()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Heading>Travel Guide</Heading>
        {this.renderApiStatus()}
      </BgContainer>
    )
  }
}

export default App
