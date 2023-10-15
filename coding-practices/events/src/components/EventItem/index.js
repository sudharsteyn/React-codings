import './index.css'

const EventItem = props => {
  const {eventDetails, onEventSelected} = props
  const {id, imageUrl, name, location} = eventDetails
  const onEventClicked = () => {
    onEventSelected(id)
  }
  return (
    <li className="event-item">
      <button onClick={onEventClicked} className="event-btn" type="button">
        <img className="event-img" src={imageUrl} alt="event" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
