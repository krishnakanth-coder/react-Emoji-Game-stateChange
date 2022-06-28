import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props
  const Iswin = score === 12
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickplayGain = () => {
    resetGame()
  }

  return (
    <div className="win-lose-container">
      <div className="win-lose-status">
        {Iswin && (
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{score}/12</p>
          </div>
        )}
        {!Iswin && (
          <div>
            <h1>You Lose</h1>
            <p>Score</p>
            <p>{score}/12</p>
          </div>
        )}

        <button type="button" className="play-button" onClick={onClickplayGain}>
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="win-lose-emoji" />
    </div>
  )
}

export default WinOrLoseCard
