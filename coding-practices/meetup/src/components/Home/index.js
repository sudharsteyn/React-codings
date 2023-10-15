import {Link} from 'react-router-dom'

import Header from '../Header'

import {
  BgContainer,
  HomeContainer,
  WelcomeHeading,
  RegisterDetail,
  RegisterButton,
  MeetImage,
  UserName,
  UserTopic,
} from './styledComponents'

import MeetUpContext from '../../context/MeetUpContext'

const Home = props => {
  const {history} = props
  const onRegisterMeet = () => {
    history.replace('/register')
  }
  const renderRegisteredView = (name, topic) => (
    <HomeContainer>
      <UserName>Hello {name}</UserName>
      <UserTopic>Welcome to {topic}</UserTopic>
      <MeetImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </HomeContainer>
  )
  const renderWelcomeView = () => (
    <HomeContainer>
      <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
      <RegisterDetail>Please register for the topic</RegisterDetail>
      <Link to="/register">
        <RegisterButton onClick={onRegisterMeet} type="button">
          Register
        </RegisterButton>
      </Link>

      <MeetImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </HomeContainer>
  )
  return (
    <MeetUpContext.Consumer>
      {value => {
        const {userRegistered, userName, selectedTopic} = value
        return (
          <BgContainer>
            <Header />
            {userRegistered
              ? renderRegisteredView(userName, selectedTopic)
              : renderWelcomeView()}
          </BgContainer>
        )
      }}
    </MeetUpContext.Consumer>
  )
}

export default Home
