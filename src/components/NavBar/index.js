import './index.css'

const NavBar = props => {
  const {score, topScore, gameProgress} = props
  return (
    <div className="navbar-card-container">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo-image"
        />
        <h1>Emoji Game</h1>
      </div>
      {gameProgress && (
        <div className="logo-card score-card">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
