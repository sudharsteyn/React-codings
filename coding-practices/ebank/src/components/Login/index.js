import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  LoginContainer,
  LoginImg,
  LoginForm,
  WelcomeText,
  InputContainer,
  InputLabel,
  CustomInput,
  SubmitButton,
  LoginErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: '', showErrorMsg: false}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  submitLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetail = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetail),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserID = () => {
    const {userId} = this.state
    return (
      <InputContainer>
        <InputLabel htmlFor="userID">User ID</InputLabel>
        <CustomInput
          onChange={this.onChangeUserId}
          value={userId}
          type="text"
          id="userID"
          placeholder="Enter User ID"
        />
      </InputContainer>
    )
  }

  renderPIN = () => {
    const {pin} = this.state
    return (
      <InputContainer>
        <InputLabel htmlFor="PIN">PIN</InputLabel>
        <CustomInput
          onChange={this.onChangePin}
          value={pin}
          type="password"
          id="PIN"
          placeholder="Enter PIN"
        />
      </InputContainer>
    )
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginContainer>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginForm onSubmit={this.submitLogin}>
            <WelcomeText>Welcome Back!</WelcomeText>
            {this.renderUserID()}
            {this.renderPIN()}
            <SubmitButton type="submit">Login</SubmitButton>
            {showErrorMsg && <LoginErrorMsg>{errorMsg}</LoginErrorMsg>}
          </LoginForm>
        </LoginContainer>
      </BgContainer>
    )
  }
}

export default Login
