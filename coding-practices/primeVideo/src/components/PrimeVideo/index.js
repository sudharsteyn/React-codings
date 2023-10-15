import MoviesSlider from '../MoviesSlider'

import './index.css'

const movieCategoryConstants = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(eachMovie => {
    if (eachMovie.categoryId === movieCategoryConstants.action) {
      return eachMovie
    }
    return null
  })
  const comedyMoviesList = moviesList.filter(eachMovie => {
    if (eachMovie.categoryId === movieCategoryConstants.comedy) {
      return eachMovie
    }
    return null
  })
  return (
    <div className="app-container">
      <img
        className="prime-video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="slider-heading">Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <h1 className="slider-heading">Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
