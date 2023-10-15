import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  return (
    <div>
      <Popup
        modal
        trigger={<img src={movieDetails.thumbnailUrl} alt="thumbnail" />}
      >
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              className="close-btn"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose size={30} />
            </button>
            <ReactPlayer
              className="video-player"
              controls
              url={movieDetails.videoUrl}
            />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
