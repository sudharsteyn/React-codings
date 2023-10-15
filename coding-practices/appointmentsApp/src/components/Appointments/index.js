import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    appointment: '',
    date: '',
    starredAppointmentList: [],
    isStarredClicked: false,
  }

  addAppointment = event => {
    event.preventDefault()
    const {appointment, date} = this.state
    const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    console.log(formattedDate)
    const newAppointment = {
      id: uuidv4(),
      appointmentTitle: appointment,
      appointmentDate: formattedDate,
      starred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      appointment: '',
      date: '',
    }))
  }

  onAppointment = event => {
    this.setState({appointment: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onStarredClicked = () => {
    this.setState(prevState => ({
      starredAppointmentList: prevState.appointmentList.filter(
        eachAppointment => eachAppointment.starred === true,
      ),
      isStarredClicked: !prevState.isStarredClicked,
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, starred: !eachAppointment.starred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {
      appointmentList,
      starredAppointmentList,
      appointment,
      date,
      isStarredClicked,
    } = this.state
    const showAppointmentList = isStarredClicked
      ? starredAppointmentList
      : appointmentList
    return (
      <div>
        <div>
          <div>
            <h1>Add Appointment</h1>
            <form onSubmit={this.addAppointment}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                value={appointment}
                onChange={this.onAppointment}
                id="title"
                type="text"
                placeholder="Title"
              />
              <br />
              <label htmlFor="date">DATE</label>
              <br />
              <input
                value={date}
                onChange={this.onDate}
                id="date"
                type="date"
              />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointments">
            <h1>Appointments</h1>
            <button onClick={this.onStarredClicked} type="button">
              starred
            </button>
          </div>
          <ul className="appointment-list">
            {showAppointmentList.map(eachAppointment => (
              <AppointmentItem
                toggleStar={this.toggleStar}
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
