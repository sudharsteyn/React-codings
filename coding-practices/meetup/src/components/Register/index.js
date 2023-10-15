import {Component} from 'react'

import Header from '../Header'

import {
  BgContainer,
  RegisterContainer,
  RegisterImg,
  RegisterForm,
  FormHeading,
  InputContainer,
  Label,
  Input,
  SelectTopics,
  TopicOption,
  RegisterNowBtn,
  RegisterFailure,
} from './styledComponents'

import MeetUpContext from '../../context/MeetUpContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userName: '',
    selectedTopic: topicsList[0].id,
    showError: false,
  }

  changeUsername = event => {
    this.setState({userName: event.target.value})
  }

  changeTopic = event => {
    this.setState({selectedTopic: event.target.value})
  }

  renderNameInput = () => {
    const {userName} = this.state
    return (
      <InputContainer>
        <Label htmlFor="name">NAME</Label>
        <Input
          onChange={this.changeUsername}
          value={userName}
          id="name"
          type="text"
          placeholder="Your name"
        />
      </InputContainer>
    )
  }

  renderTopics = () => {
    const {selectedTopic} = this.state
    return (
      <InputContainer>
        <Label htmlFor="topic">TOPICS</Label>
        <SelectTopics
          onChange={this.changeTopic}
          id="topic"
          value={selectedTopic}
        >
          {topicsList.map(eachTopic => (
            <TopicOption value={eachTopic.id} key={eachTopic.id}>
              {eachTopic.displayText}
            </TopicOption>
          ))}
        </SelectTopics>
      </InputContainer>
    )
  }

  render() {
    const {showError} = this.state
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {onUpdateUserRegister} = value
          const submitRegister = event => {
            event.preventDefault()
            const {userName, selectedTopic} = this.state
            const userTopic = topicsList.find(
              eachTopic => eachTopic.id === selectedTopic,
            )
            console.log(userTopic)
            if (userName === '') {
              this.setState({showError: true})
            } else {
              onUpdateUserRegister(userName, userTopic.displayText)
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <BgContainer>
              <Header />
              <RegisterContainer>
                <RegisterImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RegisterForm onSubmit={submitRegister}>
                  <FormHeading>Let us join</FormHeading>
                  {this.renderNameInput()}
                  {this.renderTopics()}
                  <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
                  {showError && (
                    <RegisterFailure>Please enter your name</RegisterFailure>
                  )}
                </RegisterForm>
              </RegisterContainer>
            </BgContainer>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}

export default Register
