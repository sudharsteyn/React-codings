import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-card-container">
      <div className="score-details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
