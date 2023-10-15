import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescribe,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescribe>
      We are sorry, the page you requested could not be found.
    </NotFoundDescribe>
  </NotFoundContainer>
)

export default NotFound
