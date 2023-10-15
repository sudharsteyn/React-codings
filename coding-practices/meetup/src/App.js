import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import MeetUpContext from './context/MeetUpContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {userName: '', selectedTopic: '', userRegistered: false}

  updateRegister = (name, topic) => {
    this.setState({userRegistered: true, userName: name, selectedTopic: topic})
  }

  render() {
    const {userName, selectedTopic, userRegistered} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          userName,
          selectedTopic,
          userRegistered,
          onUpdateUserRegister: this.updateRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
