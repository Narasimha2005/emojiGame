import './index.css'

const WinOrLoseCard = props => {
  const {score, emojisListlength, onClickPlayAgain} = props
  const winOrLose = score === emojisListlength ? 'Won' : 'Lose'

  let winOrLoseImageUrl
  let subHeading
  if (winOrLose === 'Won') {
    winOrLoseImageUrl =
      'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    subHeading = 'Best Score'
  } else {
    winOrLoseImageUrl =
      'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    subHeading = 'Score'
  }
  return (
    <div className="win-or-lose-container">
      <div className="win-or-lose-text-container">
        <h1 className="win-or-lose-heading">You {winOrLose}</h1>
        <p className="sub-heading">{subHeading}</p>
        <p className="win-or-lose-score">
          {score}/{emojisListlength}
        </p>
        <button
          className="win-or-lose-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src={winOrLoseImageUrl}
        className="win-or-lose-image"
        alt="win or lose"
      />
    </div>
  )
}
export default WinOrLoseCard
