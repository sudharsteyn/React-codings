import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props
  const renderNoActiveEvent = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )
  const renderYetToRegister = () => (
    <div>
      <img
        className="status-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )
  const renderRegistered = () => (
    <div>
      <img
        className="status-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )
  const renderRegistrationsClosed = () => (
    <div>
      <img
        className="status-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (eventStatus) {
    case eventStatusConstants.initial:
      return renderNoActiveEvent()
    case eventStatusConstants.yetToRegister:
      return renderYetToRegister()
    case eventStatusConstants.registered:
      return renderRegistered()
    case eventStatusConstants.registrationClosed:
      return renderRegistrationsClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
