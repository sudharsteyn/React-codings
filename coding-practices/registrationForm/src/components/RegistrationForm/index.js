import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequired: '',
    lastNameRequired: '',
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameRequired: 'Required'})
    } else {
      this.setState({firstNameRequired: ''})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameRequired: 'Required'})
    } else {
      this.setState({lastNameRequired: ''})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    this.onBlurFirstName()
    this.onBlurLastName()
    if (firstName === '' || lastName === '') {
      return
    }
    this.setState({isSubmitted: true})
  }

  renderFirstName = () => {
    const {firstName, firstNameRequired} = this.state

    return (
      <div className="input-container">
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          className="first-name-input-filed"
          id="firstName"
          value={firstName}
          type="text"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
        <p className="required-msg">{firstNameRequired}</p>
      </div>
    )
  }

  renderLastName = () => {
    const {lastName, lastNameRequired} = this.state

    return (
      <div className="input-container">
        <label htmlFor="lastName">LAST NAME</label>
        <input
          className="last-name-input-filed"
          id="lastName"
          value={lastName}
          type="text"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
        <p className="required-msg">{lastNameRequired}</p>
      </div>
    )
  }

  submitForm = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  renderForm = () => (
    <form className="registration-form" onSubmit={this.onSubmitForm}>
      {this.renderFirstName()}
      {this.renderLastName()}
      <button type="submit">Submit</button>
    </form>
  )

  renderSubmitted = () => (
    <div className="submitted-success">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={this.submitForm} type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? this.renderSubmitted() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
