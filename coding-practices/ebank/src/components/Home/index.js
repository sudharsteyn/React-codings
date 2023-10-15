import Cookies from 'js-cookie'

import {
  HomeContainer,
  Header,
  WebsiteLogo,
  LogoutButton,
  DigitalCardContainer,
  HomeSlogan,
  DigitalCard,
} from './styledComponents'

const Home = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HomeContainer>
      <Header>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="be website logo"
        />
        <LogoutButton onClick={onLogout} type="button">
          Logout
        </LogoutButton>
      </Header>
      <DigitalCardContainer>
        <HomeSlogan>Your Flexibility, Our Excellence</HomeSlogan>
        <DigitalCard
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </DigitalCardContainer>
    </HomeContainer>
  )
}

export default Home
