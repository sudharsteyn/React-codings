import {Route, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  const {history} = props
  if (token === undefined) {
    history.replace('/login')
  }

  return <Route {...props} />
}

export default withRouter(ProtectedRoute)
