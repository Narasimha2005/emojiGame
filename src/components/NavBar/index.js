import './index.css'

const NavBar = props => {
  const {score, topScore, gameActive} = props
  let ScoreComponent
  if (gameActive === true) {
    ScoreComponent = (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  } else {
    ScoreComponent = ''
  }
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="navbar-heading">Emoji Game</h1>
      </div>
      {ScoreComponent}
    </nav>
  )
}
export default NavBar
