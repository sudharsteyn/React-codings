import {Switch, Route, Redirect} from 'react-router-dom'

import TechEra from './components/TechEra'
import NotFound from './components/NotFound'
import CourseDetail from './components/CourseDetail'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={TechEra} />
    <Route exact path="/courses/:id" component={CourseDetail} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
