import React from 'react'

const MeetUpContext = React.createContext({
  userName: '',
  selectedTopic: '',
  userRegistered: false,
  onUpdateUserRegister: () => {},
})

export default MeetUpContext
