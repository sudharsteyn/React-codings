import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {appointmentTitle, appointmentDate, starred, id} = appointmentDetails
  const starImg = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onStarClicked = () => {
    toggleStar(id)
  }
  return (
    <li className="appointment-card">
      <div className="appointment-info">
        <p>{appointmentTitle}</p>
        <button data-testid="star" onClick={onStarClicked} type="button">
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p>{appointmentDate}</p>
    </li>
  )
}

export default AppointmentItem
